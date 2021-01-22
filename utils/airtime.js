async function checkUserDetails(opt = { username: "setsub", apiKey: "jdj54ikjjf", }) {
    let res = await fetch("/api/airtime/checkBalance/", {
        method: "GET",
    })
    return await res.json();
}

async function buyAirtime(options = {}) {
    let res = await fetch("https://setsub.com/buyAirtime", {
        method: "POST",
        mode: "cors",
        headers: {
            "Authorization": "Token 66f2e5c39ac8640f13cd888f161385b12f7e5e92",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "username", apiKey: "jdj54ikjjf", network: "mtn",
            amount: 100, beneficiaryNumber: "09038472927"
        })
    })
    return await res.json();
}

export { checkUserDetails, buyAirtime }