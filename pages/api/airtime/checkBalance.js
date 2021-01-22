import got from "got"
export default async function handler(req, res) {
    console.log("oiuijkijio")
    console.log(req.method)
    if (req.method === "GET") {
        try {
            console.log("oiuijkijio")
            let { body } =
                await got.post("https://www.datahouse.com.ng/api/user/", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token  ec06a94299dd31b5c2ab38c068c33ad403a97d64"
                    }
                })
            //console.log(body)
            res.json(body)
        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
}