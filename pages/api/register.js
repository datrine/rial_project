import { middlewareRunner } from "../../utils/utilFns"
import Cors from "cors"
import knex from "../../utils/conn"
import { registerValidator } from "../../utils/validators"
import { v4 } from "uuid"
import { signAsJWT } from "../../utils/auth"
import { csrfToken, signIn } from 'next-auth/client'

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "POST") {
            await middlewareRunner(req, res, cors);
            let valResult = await registerValidator(req.body)
            console.log(req.body)
            if (valResult.valid) {
                let { userRePass,changedState, ...data } = req.body
                console.log(data)
                await knex("users").insert({ ...data, unique_code: v4(), reg_date: (new Date) }).
                    then(async returnedRes => {
                        console.log("returnedRes")
                        console.log(returnedRes)
                        console.log("returnedRes")
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
        console.error(error.message);
    }
}
