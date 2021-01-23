import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../../utils/conn"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        console.log("userEmailOrName")
        if (req.method === "GET") {
            const {
                query: { userEmailOrName },
            } = req
            console.log("userEmailOrName")
            await middlewareRunner(req, res, cors);
            await knex("wallet").where({ userEmail: userEmailOrName })
                .then(async returnedRes => {
                    console.log("returnedRes")
                    console.log(returnedRes)
                    console.log("returnedRes")
                    if (returnedRes.length > 0) {
                        return res.json({ ...returnedRes[0] })
                    } else {
                        await knex("wallet").insert({ userEmail: userEmailOrName, balance: 0.0, ref_bal: 0 })
                            .select().then(async returnedRes => {
                                if (returnedRes.length > 0) {
                                    console.log(returnedRes)
                                    return res.json({ ...returnedRes[0] })
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
