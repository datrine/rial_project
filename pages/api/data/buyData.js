import got from "got"
import { v4 } from "uuid"
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let {operator: network, phonenum: number, plan_id: product_code } = req.body;
            //console.log(req.body)
            let api_key = "6ac288b42e388b7056ad9fc82cf7b357";
            let url=`https://cheapdatasales.com/api/v1/data.php/${api_key}/${network}/${number}/${product_code}`
            //console.log(url)
            let { body } =
                await got.post(`${url}`, {

                });
            if (body) {
                console.log(body)
                if (body.status === "success") {
                    res.json({ res: body, requestId })
                } else {
                    res.json({ err: "Transaction error", errObj: body, })
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