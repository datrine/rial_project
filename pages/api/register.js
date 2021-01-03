import { middlewareRunner } from "../../utils/utilFns"
import Cors from "cors"
import knex from "../../utils/conn"
import { registerValidator } from "../../utils/validators"
import { v4 } from "uuid"
import { signAsJWT } from "../../utils/auth"
import { csrfToken,signIn } from 'next-auth/client'

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "POST") {
            await middlewareRunner(req, res, cors);
            //console.log(req.body)
            let valResult = registerValidator(req.body)
            if (valResult.valid) {
                let { userRePass, ...data } = req.body
                knex("users").insert({ ...data, unique_code: v4(), reg_date: (new Date) }).
                    then(async returnedRes => {
                        if (returnedRes) {
                            //console.log(returnedRes)
                            let token = await signAsJWT({ userEmail: req.body.userEmail })
                            //console.log(`token: ${token}`)
                            //await signIn("credentials",{username:data.userName,password:data.userPass})
                            return res.json({ saved: true, res: "saved" })
                        }
                    }).catch(err => {
                        console.log(err)
                        res.statusCode = 500;
                        return res.json({ err: "User with similar info already exists" });
                    })
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}
