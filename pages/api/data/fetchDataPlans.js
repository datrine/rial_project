import got from "got"
import { v4 } from "uuid"
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let { operator } = req.body;
            console.log(operator)
            let requestId = v4()
            console.log(requestId)
            let { body,...rest} =
                await got.post("https://api.mobilevtu.com/v1/Lk7xXF4ZW2lrZoSsDUbfrejC8x8o/fetch_data_plans", {
                    headers: {
                        "Api-Token": "uRtvveJUYyEd0mQR4sFJQZHpffMS",
                        "content-type": "application/x-www-form-urlencoded",
                        "Request-Id": requestId,
                    },
                    body: `operator=${operator}`,
                    responseType: "json"
                });
            console.log("rest.complete")
            console.log(body)
            console.log("rest.complete")
            if (body) {
                if (body.status === "success") {
                    res.json({ res: body, requestId })
                } else {
                    res.json({ err: "Transaction error", errObj: body, requestId })
                }
            } else {
                res.json({ err: "Empty response..." })
            }
        } catch (error) {
            console.log(error)
            if (typeof error !== "object") {
                return res.json({ err: error.name, error });
            }
            return res.json({ err: error })
        }
    }
}