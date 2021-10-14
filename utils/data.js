async function buyData(options = { operator: "", plan_id: "", phonenum: "" }) {
    try {
        console.log(options)
        let res = await fetch("/api/data/buyData", {
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

async function fetchDataPlans(options = { operator: "", }) {
    try {
        console.log(options)
        let res = await fetch("/api/data/fetchDataPlans", {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": "Token 66f2e5c39ac8640f13cd888f161385b12f7e5e92",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        });
        let {dataplans,err} = await res.json();
        if (err) {
            throw err;
        }
        console.log(dataplans)
        return { dataplans }
    } catch (error) {
        return { err: error }
    }
}

export { buyData, fetchDataPlans }