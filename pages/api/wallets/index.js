import { middlewareRunner } from "../../../utils/utilFns"
import Cors from "cors"
import knex from "../../../utils/conn"
import { registerValidator } from "../../../utils/validators"
import { v4 } from "uuid"
import bcrypt from "bcrypt"

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST']
});

export default async function (req, res) {
    try {
        if (req.method === "GET") {
            await middlewareRunner(req, res, cors);
              let wallets=  await knex.select("*").from("users");
              console.log(wallets)
              knex.destroy();
              return res.json({wallets})
        }
    } catch (error) {
        console.error(error);
    }
}
