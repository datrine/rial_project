import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../../utils/conn"
import { getSession } from "next-auth/client";

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let session= await getSession({req});
        if (!session) {
            throw "No session is active for req."
        }
        if (req.method === "POST") {
            const {
                query: { username },
            } = req

            await middlewareRunner(req, res, cors);
            await knex("wallets").where({ username }).increment({
                balance: req.body.amt
            }).update({ updatedOn: new Date() }).then(async returnedRes => {
                if (returnedRes) {
                    console.log(returnedRes)
                    //console.log(`token: ${token}`)
                    //await signIn("credentials",{username:data.userName,password:data.userPass})
                    return res.json({ ...returnedRes[0] })
                }
            }).catch(error => {
                console.log(error)
                return res.json({ err: "Network error", error });
            })

        }
    } catch (error) {
        console.error(error.message);
    }
}
