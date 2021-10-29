import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../../utils/conn"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "GET") {
            const {
                query: { username },
            } = req
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
        console.error(error.message);
    }
}
