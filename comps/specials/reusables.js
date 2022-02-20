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

function LogoBar(params) {
    return <>
        <a href="index.html">
            <img src="/assets/img/logo/logo.svg" alt="" style={{ width: "150px" }} />
        </a>
    </>
}

function ProfileBar({ }) {
    let [session, loading] = useSession();
    let view = null
    if (!session) {
        return <></>;
    }
    view = <>
        <img src="/img/default-user-avatar.png" alt="" style={{ width: "40px" }} />
        <span>
            <span className="dropdown" style={{}}>
                <a className=" dropdown-toggle" data-toggle="dropdown">
                    {session.user.username} &nbsp;</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/profile">
                        <i className='fas fa-user ' style={{ fontSize: "15px", color: "#4621ad" }}></i>&nbsp;Profile</a>
                    <button className="dropdown-item" onClick={signOut}>
                        <i className='fas fa-wallet '
                            style={{ fontSize: "15px", color: "#4621ad" }}></i>
                        &nbsp;Sign Out</button>
                </div>
            </span>
        </span>
    </>

    return <>{view} </>;
}

function BalanceBar({ isLoggedIn = true }) {
    let [session, loading] = useSession();
    let [sourceBalanceState, changeBalanceState] = useState(0)
    let view = null
    useEffect(() => {
        (async () => {
            try {
                if (session) {
                    let { username } = session.user
                    let res = await fetch(`/api/${username}/wallet/total`);
                    let data = await res.json()
                    let { err, wallet } = data
                    if (err) {
                        throw err
                    }
                    console.log(wallet)
                    changeBalanceState(wallet.balance)
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [session])
    if (!session) {
        return <></>;
    }
    view = <>
        <div className="white">
            <section id="" className="py-4 container" >
                <i className='fas fa-wallet' style={{ fontSize: "25px", color: "#4621ad" }}>
                </i>Balance: ₦ {(() => {
                    console.log(sourceBalanceState)
                    let numString = sourceBalanceState
                    numString = isNaN(numString) ? 0.00 : numString
                    return numString
                })()} &nbsp; &nbsp; &nbsp;

            </section>
        </div>
    </>

    return <>{view} </>;
}

export { Comp_Header, BalanceBar, ProfileBar, LogoBar }