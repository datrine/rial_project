import { middlewareRunner } from "../../../../utils/utilFns"
import Cors from "cors"
import createDBConn from "../../../../utils/conn"
import { getSession } from "next-auth/client";
const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let knex = createDBConn()
        let session = await getSession({ req });
        if (!session) {
            throw "No authorization"
        }
        if (req.method === "PUT") {
            let { amount, username } = req.body;
            amount = Number(amount)
            await middlewareRunner(req, res, cors);
            await knex("wallets").where({ username }).update({ balance: amount, updatedOn: new Date() }).then(async returnedRes => {
                if (returnedRes) {
                    console.log(returnedRes)
                    //console.log(`token: ${token}`)
                    //await signIn("credentials",{username:data.userName,password:data.userPass})
                    return res.json({ ...returnedRes[0] })
                }
            }).catch(error => {
                console.log(error)
                return res.json({ err: "Network error", error });
            })

        }
    } catch (error) {
        console.error(error.message);
    }
}
