import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import createDBConn from "../../../utils/conn"
import { getSession } from "next-auth/client";

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let knex=createDBConn()
        let session= await getSession({req});
        if (!session) {
            throw "No session is active for req."
        }
        if (req.method === "GET") {
            const {
                query: { username },
            } = req
            //console.log(username)
            await middlewareRunner(req, res, cors);
            await knex("transactions").where({ username })
                .then(async returnedRes => {
                    console.log(returnedRes)
                    return res.json({ transactions: returnedRes })
                }).catch(error => {
                    console.log(error)
                    //res.statusCode = 500;
                    return res.json({ err: "Network or server error", error });
                })

        }
    } catch (error) {
        console.error(error.message);
    }
}
