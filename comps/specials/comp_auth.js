import { useState } from "react";
import { Comp_Login } from "./comp_login"
//component for the mobile menu
function Comp_Auth({ isLoggedIn = true }) {
    return <>
        {isLoggedIn ? null : <Comp_Login />}
    </>;
}



export { Comp_Auth }