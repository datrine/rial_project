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
        if (req.method === "GET") {
            const {
                query: { username },
            } = req
            if (!username) {
                throw "No username as key"
            }
            await middlewareRunner(req, res, cors);
            await knex("wallets").where({ username })
                .then(async returnedRes => {
                    if (returnedRes.length > 0) {
                        console.log(returnedRes[0])
                        return res.json({ wallet: { ...returnedRes[0] } })
                    } else {
                        await knex("wallets").insert({
                            username,
                            balance: 0.0,
                            ref_bal: 0
                        })
                            .select().then(async returnedRes => {
                                if (returnedRes.length > 0) {
                                    console.log(returnedRes[0])
                                    return res.json({ wallet: { ...returnedRes[0] } })
                                }
                            }).catch(err => {
                                console.log(err)
                                return res.json({ err })
                            })
                    }
                }).catch(error => {
                    console.log(error)
                    return res.json({ err: "Network or server error", error });
                })

        }
    } catch (error) {
        console.log(error.message);
        return { err: error }
    }
}
