import got from "got"
import { v4 } from "uuid"
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let { operator, phone, value, type } = req.body;
            let requestId = v4()
            let { body } =
                await got.post("https://api.mobilevtu.com/v1/Lk7xXF4ZW2lrZoSsDUbfrejC8x8o/topup", {
                    headers: {
                        "Api-Token": "uRtvveJUYyEd0mQR4sFJQZHpffMS",
                        "content-type": "application/x-www-form-urlencoded",
                        "Request-Id": requestId,
                    },
                    body: `operator=${operator}&phone=${phone}&type=${type}&value=${value}`,
                    responseType: "json"
                });
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