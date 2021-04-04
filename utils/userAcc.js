async function checkUserDetails(opt = { username: "setsub", apiKey: "jdj54ikjjf", }) {
    try {
        let fetchRes = await fetch("/api/checkBalance/", {
            method: "GET",
        })
        let { res, err } = await fetchRes.json();
        if (res) {
            return { res }
        }
        if (err) {
            return { err }
        }
    } catch (error) {
        return { err: error }
    }
}

export {checkUserDetails}