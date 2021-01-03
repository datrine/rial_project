async function middlewareRunner(req,res,middleware) {
    return new Promise((resolve,reject)=>{
        //console.log("SAZDSXDXDF");
        middleware(req,res,(result)=>{
            if (result instanceof Error) {
                console.log(result)
               return reject(result);
            }
            //console.log(result)
            return resolve(result);
        });
    })
}
export {middlewareRunner};