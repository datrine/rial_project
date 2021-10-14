

import {middlewareRunner} from "../../utils/utilFns"
import Cors from "cors"
import knex from "../../utils/conn"
let fetchHost = "http://localhost:4000"
const cors = Cors({
  methods: ['GET', 'HEAD','POST'],
});
export default async function(req,res){
  try {
    if (req.method==="GET") {
      await  middlewareRunner(req,res,cors);
      //console.log("req.query")
    }
  } catch (error) {
    console.error(error.message);
  }
}