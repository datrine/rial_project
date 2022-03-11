
import { v4 } from "uuid"
import createDBConn from "../../../utils/conn"
import FormData from "form-data"
import { getUser, getWallet, holdBalance, releaseBalance, startTransaction, subtractBalance, updateTransaction, verifyBalance } from "../../../utils/knexMethods"
let apiKey = process.env.apiKey
export default async function handler(req, res) {
    if (req.method === "POST") {
        let knex = createDBConn()
        try {
            let requestID = v4();
            let { serviceID, phone, email, amount } = req.body;
            console.log(req.body)
            if (!serviceID) {
                throw "No Service ID "
            }
            if (!amount) {
                throw "No Amount"
            }
            if (!email) {
                throw "No email"
            }
            if (!phone) {
                throw "No phone"
            }
            let getUserResponse = await getUser({ email });

            if (getUserResponse.err) {
                throw getUserResponse.err
            }
            let user = getUserResponse.user;
            let username = user.username
            
            let startTransactionResponse = 
            await startTransaction({ requestID, amount, username,service:"airtime" });
            if (startTransactionResponse.err) {
                console.log(startTransactionResponse.err)
                throw startTransactionResponse.err
            }

            let getWalletResponse = await getWallet({ username });
            if (getWalletResponse.err) {
                console.log(getWalletResponse.err)
                throw getWalletResponse.err
            }

            let balanceVerifyResponse = await verifyBalance({
                wallet: getWalletResponse.wallet,
                amountToVerify: amount
            });


            if (balanceVerifyResponse.err) {
                throw balanceVerifyResponse.err
            }

            let holdBalanceResponse = await holdBalance({ username, amountToVerify: amount })

            if (holdBalanceResponse.err) {
                throw balanceVerifyResponse.err
            }

            let formData = new FormData()
            formData.append("requestID", requestID)
            formData.append("serviceID", serviceID)
            formData.append("api", apiKey)
            formData.append("amount", amount)
            formData.append("phone", phone)
            let response = await fetch("https://abtospay.com/api/pay.php", {
                method: "post",
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                },
                body: formData
            });
            console.log(response.status)
            if (!response.ok) {
                throw { err: `Status code ${response.status}` }
            }
            let data = await response.json();
            console.log(data)
            if (data.code !== 200) {
                throw `Abtospay code ${data.code}. status: ${data.status}`
            }
            res.json({ saved: true, })

            let updatedTransactionRes = await updateTransaction({ username, requestID, state: "successful" })
            if (updatedTransactionRes) {
                console.log(updatedTransactionRes)
            }
            let subtractBalanceResponse = await subtractBalance({
                username,
                amountToSubtract: amount, wallet: holdBalanceResponse.wallet
            })

            if (subtractBalanceResponse.err) {
                throw subtractBalanceResponse.err
            }

            let releaseBalanceResponse = await releaseBalance({
                username,
                amountToRelease: amount
            });

            console.log(releaseBalanceResponse.info)

        } catch (error) {
            //record transaction as failed
            let updatedTransactionRes = await updateTransaction({ username, requestID, state: "failed" })
            console.log(error)
            res.json({ err: error })
        }
    }
}