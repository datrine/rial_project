import got from "got"
import {v4} from "uuid"
export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            let requestId=v4()
            let { body, } =
                await got.get("https://api.mobilevtu.com/v1/Lk7xXF4ZW2lrZoSsDUbfrejC8x8o/check_balance", {
                    headers: {
                        "Api-Token": "uRtvveJUYyEd0mQR4sFJQZHpffMS",
                        "content-type": "application/x-www-form-urlencoded",
                        "Request-Id": requestId
                    },
                    responseType: "json"
                });
                if (body) {
                    
            if (body.status==="success") {
                res.json({ res: body ,requestId})
            }else{
                res.json({ err:"Transaction error" ,errObj: body,requestId})
            }
                } else {
                res.json({ err: "Empty response..." })
            }
        } catch (error) {
            console.log(error)
            res.json({ err: error })
        }
    }
}