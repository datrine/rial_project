async function buyAirtime(options={amount:0,mobile_number:"07068968932",network:1}) {
    let res = await fetch("/api/airtime/buyAirtime", {
        method: "POST",
        body: JSON.stringify({
            ...options
        })
    })
    return await res.json();
}

export { buyAirtime }