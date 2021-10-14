async function middlewareRunner(req, res, middleware) {
    return new Promise((resolve, reject) => {
        //console.log("SAZDSXDXDF");
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                console.log(result)
                return reject(result);
            }
            //console.log(result)
            return resolve(result);
        });
    })
}

let memoFn = (() => {
    let cache = {}
    return async (...args) => {
        try {
            let tempArgs=[...args]
            if (typeof tempArgs[0] === "function") {
                let fn = args[0]
                let memoKey = tempArgs[tempArgs.length - 1]
                if (memoKey in cache) {
                    return cache[memoKey];
                }
                tempArgs.splice(0, 1);
                tempArgs.splice(tempArgs.length - 1, 1);
                cache[memoKey] = await new Promise(async (res, rej) => {
                    try {
                        let result = await fn(...tempArgs)
                        return res(result)
                    } catch (error) {
                        return rej({ err: error })
                    }
                })
                console.log(cache[memoKey])
                return cache[memoKey]
            }
            else {
                let memoKey = tempArgs[0];
                tempArgs.splice(0, 1);
                if (tempArgs.length > 0) {
                    let obj = { ...tempArgs[0] }
                    cache[memoKey] = obj
                }
                return cache[memoKey];
            }
        } catch (error) {
            console.log(error)
            let memoKey;
            if (typeof args[0] === "function") {
                memoKey=args[args.length-1]
               cache[memoKey]={err:error}
            }else{
                memoKey=args[0]
                 cache[memoKey]={err:error}
            }
                return cache[memoKey]
        }
    }
})();



export { middlewareRunner, memoFn };