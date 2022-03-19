
import { v4 } from "uuid"
import Cors from "cors"
import createDBConn from "../../../utils/conn"
import FormData from "form-data"
import { getUser, getWallet, holdBalance, releaseBalance, startTransaction, subtractBalance, updateTransaction, verifyBalance } from "../../../utils/knexMethods"
let apiKey = process.env.apiKey
export default async function handler(req, res) {
    let username = ""
    let requestID = "";
    if (req.method === "POST") {
        try {
            requestID = v4();
            let { serviceID, plan, amount, email, phone } = req.body;
            console.log(req.body)
            if (!serviceID) {
                throw "No Service ID "
            }
            if (!amount) {
                throw "No amount selected"
            }
            if (!plan) {
                throw "No plan selected"
            }
            if (!email) {
                throw "No email"
            }
            if (!phone) {
                throw "No phone"
            }
            amount = Number(amount)
            console.log(amount+"...amount")
            let getUserResponse = await getUser({ email });

            if (getUserResponse.err) {
                throw getUserResponse.err
            }
            let user = getUserResponse.user;
            username = user.username;

            let startTransactionResponse =
                await startTransaction({ requestID, amount, username, service: "airtime" });
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
                console.log("holdBalanceResponse.err")
                console.log(holdBalanceResponse.err)
                throw balanceVerifyResponse.err
            }

            let formData = new FormData()
            formData.append("requestID", requestID)
            formData.append("serviceID", serviceID)
            formData.append("api", apiKey)
            formData.append("amount", amount)
            formData.append("phone", phone)
            formData.append("plan", plan)
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
            console.log(error)
            //record transaction as failed
            if (username&&requestID) {
                
                let updatedTransactionRes =
            await updateTransaction({ username, requestID, state: "failed" })
             console.log(updatedTransactionRes)
            }

            res.json({ err: error })
        }
    }
}