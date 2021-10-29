import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../utils/conn"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "GET") {
            const {
                query: { email, username },
            } = req
            let email = email
            await middlewareRunner(req, res, cors);
            await knex("users").where({ referrer: email }).orWhere({ referral: username })
                .then(async returnedRes => {
                    console.log(returnedRes)
                    return res.json({ referrers: returnedRes })
                }).catch(error => {
                    console.log(error)
                    //res.statusCode = 500;
                    return res.json({ err: "Network or server error", error });
                })

        }
    } catch (error) {
        console.error({ error, err: error.message });
    }
}