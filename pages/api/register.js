import { middlewareRunner } from "../../utils/utilFns"
import Cors from "cors"
import createDBConn from "../../utils/conn"
import { registerValidator } from "../../utils/validators"
import { v4 } from "uuid"
import bcrypt from "bcrypt"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let knex=createDBConn()
        if (req.method === "POST") {
            await middlewareRunner(req, res, cors);
            let valResult = await registerValidator(req.body)
            if (valResult.valid) {
                let { repass,password,changedState, ...data } = req.body
                let passhash=await bcrypt.hash(password,8);
                console.log(passhash)
                data.passhash=passhash;
                await knex("users").insert({ ...data, unique_code: v4() }).
                    then(async returnedRes => {
                        if (returnedRes) {
                            return res.json({ saved: true, res: "saved" })
                        }
                    }).catch(error => {
                        console.log(error)
                        res.statusCode = 500;
                        return res.json({ err: "Network error", error });
                    })
            }
        }
    } catch (error) {
        console.error(error);
    }
}
