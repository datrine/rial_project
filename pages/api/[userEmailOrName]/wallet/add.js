import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../../utils/conn"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "POST") {
            const {
                query: { userEmailOrName },
            } = req
            console.log(userEmailOrName)
            console.log(req.body)
            await middlewareRunner(req, res, cors);
            await knex("wallet").where({ userEmail:userEmailOrName }).increment({
                balance:req.body.amt
            }).then(async returnedRes => {
                    if (returnedRes) {
                        console.log(returnedRes)
                        //console.log(`token: ${token}`)
                        //await signIn("credentials",{username:data.userName,password:data.userPass})
                        return res.json({...returnedRes[0] })
                    }
                }).catch(error => {
                    console.log(error)
                    return res.json({ err: "Network error",error });
                })

        }
    } catch (error) {
        console.error(error.message);
    }
}
