import { useEffect, useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faBars, faHome, faListAlt, faCartPlus, faArrowLeft, faUser }
    from "@fortawesome/free-solid-svg-icons"
import { Comp_Auth } from "./comp_auth"
import { signOut, useSession } from "next-auth/client";
//component for the mobile menu
function Comp_Header({ isLoggedIn = true }) {
    let [session, loading] = useSession();
    let view = null
    if (session) {
        view = <>
            <Comp_Auth isLoggedIn={true} />

        </>
    }
    return <>{view} </>;
}

export { Comp_Header,}