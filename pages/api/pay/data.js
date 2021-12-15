
import { v4 } from "uuid"
import Cors from "cors"
import knex from "../../../utils/conn"
import FormData from "form-data"
import { getUser, getWallet, holdBalance, releaseBalance, subtractBalance, verifyBalance } from "../../../utils/knexMethods"
let apiKey = process.env.apiKey
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let requestID = v4();
            let { serviceID, plan,amount, email, phone } = req.body;
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
            let getUserResponse = await getUser({ email });

            if (getUserResponse.err) {
                throw getUserResponse.err
            }
            let user = getUserResponse.user;
            let username = user.username
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
                console.log("balanceVerifyResponse.err")
                console.log(balanceVerifyResponse.err)
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
            let insertRes = await knex("transactions").insert({ username, requestID, platform: "abtospay" });

            if (insertRes) {
                console.log("transaction saved")
            }
            let subtractBalanceResponse = await subtractBalance({
                username,
                amountToSubtract: amount, wallet: holdBalanceResponse.wallet
            })

            if (subtractBalanceResponse.err) {
                console.log("subtractBalanceResponse.err")
                console.log(subtractBalanceResponse.err)
                throw subtractBalanceResponse.err
            }

            let releaseBalanceResponse = await releaseBalance({ username });

            console.log(releaseBalanceResponse.info)

        } catch (error) {
            console.log(error)
            res.json({ err: error })
        }
    }
}