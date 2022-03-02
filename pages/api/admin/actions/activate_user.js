import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import createDBConn from "../../../../utils/conn"
import { adminRegisterValidator, registerValidator } from "../../../../utils/validators"
import { v4 } from "uuid"
import bcrypt from "bcrypt"
import { getSession } from "next-auth/client"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let knex=createDBConn()
        let session = await getSession({ req });
        if (!session) {
            throw "No authorization"
        }
        if (req.method === "POST") {
            await middlewareRunner(req, res, cors);
            let { identifier } = req.body;
            let dbRes = await knex("users").where({ username: identifier }).
                orWhere({ email: identifier }).
                update({ state: "active" })
            return res.json({ saved: true })
        }
    } catch (error) {
        console.log(error);
        res.json({ error })
    }
}
