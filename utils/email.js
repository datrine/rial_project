/*import nodemailer from 'nodemailer'
import sendinBlue from 'nodemailer-sendinblue-transport'
var transporter = nodemailer.
    createTransport({
        host:"smtp-relay.sendinblue.com",
        port:587,
        auth:{
            user:"stynzshoes@styleznshoes.com.ng",
            pass:"WDn0Xx2kyJRITpjQ"
        }
     })

    export{transporter}*/

let sendMail = async (opts = { to: "", from: "", text: "", html: "", pass: "", user: "", host: "", port: "" }) => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_SERVICES_URL}/api/email/send`, {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(opts)
    });
    let resData = await res.json()
    return resData;
}

export { sendMail }