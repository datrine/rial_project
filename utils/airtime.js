async function buyAirtime(options = { operator: "", type: "", value: "", phone: "" }) {
    try {
        console.log(options)
        let res = await fetch("/api/airtime/buyAirtime", {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": "Token 66f2e5c39ac8640f13cd888f161385b12f7e5e92",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        let data = await res.json();
        console.log(data)
        return data
    } catch (error) {
        return { err: error }
    }
}

export { buyAirtime }