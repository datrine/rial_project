import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../utils/conn"
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
                query: { email, username },
            } = req
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
