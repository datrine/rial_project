import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import createDBConn from "../../../utils/conn"
import { adminRegisterValidator, registerValidator } from "../../../utils/validators"
import { v4 } from "uuid"
import bcrypt from "bcrypt"
import { getSession } from "next-auth/client"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let knex=createDBConn()
       let session=await getSession({req})
        if (req.method === "POST") {
            await middlewareRunner(req, res, cors);
            console.log(req.body)
            let valResult = await adminRegisterValidator(req.body)
            if (valResult.valid) {
                let { repass, password, changedState, ...data } = req.body
                let passhash = await bcrypt.hash(password, 8);
                
                data.passhash = passhash;
                await knex("admintable").insert({ ...data, }).
                    then(async returnedRes => {
                        if (returnedRes) {
                            return res.json({ saved: true, res: "saved" })
                        }
                    }).catch(error => {
                        console.log(error)
                        res.statusCode = 500;
                        return res.json({ err: "Network error", error });
                    }).finally(()=>{
                        knex.destroy();
                    });
                    
            }
            else{
                throw valResult.errorList
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ error })
    }
}
