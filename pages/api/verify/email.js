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
                query: { q },
            } = req
            console.log(q)
            await middlewareRunner(req, res, cors);
            await knex("users").where({ email: q }).then(async returnedRes => {
                if (returnedRes.length > 0) {
                    console.log(returnedRes)
                    return res.json({ isExistingEmail: true })
                }
                return res.json({ isExistingEmail: false })
            }).catch(error => {
                console.log(error)
                res.statusCode = 500;
                return res.json({ err: "Network error. Unable to verify",error });
            })

        }
    } catch (error) {
        console.error(error.message);
    }
}
