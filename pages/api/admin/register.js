import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../utils/conn"
import { adminRegisterValidator } from "../../../utils/validators"
import { v4 } from "uuid"
import bcrypt from "bcrypt"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "POST") {
            await middlewareRunner(req, res, cors);
            let valResult = await adminRegisterValidator(req.body)
            if (valResult.valid) {
                let { adminRePass, ...data } = req.body
                console.log(data)
                let hashPass = await bcrypt.hash(data.adminPass, 8);
                data.adminPass = hashPass;
                await knex("admintable").insert({ ...data, }).
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
        console.error(error.message);
    }
}
