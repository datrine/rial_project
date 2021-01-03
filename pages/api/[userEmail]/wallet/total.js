import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../../utils/conn"
import { registerValidator } from "../../../../utils/validators"
import { v4 } from "uuid"
import { signAsJWT } from "../../../../utils/auth"
import { csrfToken, signIn } from 'next-auth/client'

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "GET") {
            const {
                query: { userEmail },
            } = req
            console.log(userEmail)
            await middlewareRunner(req, res, cors);
            await knex("wallet").where({ userEmail }).select()
                .then(async returnedRes => {
                    if (returnedRes.length > 0) {
                        console.log(returnedRes)
                        return res.json({ ... returnedRes[0] })
                    } else {
                        await knex("wallet").insert({ userEmail, balance: 0.0, ref_bal: 0 })
                            .select().then(async returnedRes => {
                                if (returnedRes.length > 0) {
                                    console.log(returnedRes)
                                    return res.json({ ...returnedRes[0] })
                                }
                            }).catch(err => {
                                console.log(err)
                                res.statusCode = 500;
                            })
                    }
                }).catch(err => {
                    console.log(err)
                    res.statusCode = 500;
                    return res.json({ err: "User with similar info already exists" });
                })

        }
    } catch (error) {
        console.error(error.message);
    }
}
