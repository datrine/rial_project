import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import createDBConn from "../../../utils/conn"
import { registerValidator } from "../../../utils/validators"
import { v4 } from "uuid"
import bcrypt from "bcrypt"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        let knex=createDBConn()
        if (req.method === "GET") {
            await middlewareRunner(req, res, cors);
              let users=  await knex.select("*").from("users");
              console.log(users);
              return res.json({users})
        }
    } catch (error) {
        console.log(error);
    }
}
