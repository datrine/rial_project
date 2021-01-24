import {useEffect, useState} from "react"

let CompPreloader=()=>{
    let [showPreloader,toggleShowPreloader]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
        toggleShowPreloader(false)},2000)
    },[])
    return<>
    <div id="preloader-active" style={{display:showPreloader?"block":"none"}}>
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="/assets/img/logo/favicon.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
}

export {CompPreloader};