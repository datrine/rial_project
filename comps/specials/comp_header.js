import { useEffect, useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faBars, faHome, faListAlt, faCartPlus, faArrowLeft, faUser }
 from "@fortawesome/free-solid-svg-icons"
import { Comp_Auth } from "./comp_auth"
import { signOut, useSession } from "next-auth/client";
//component for the mobile menu
function Comp_Header({ isLoggedIn = true }) {
    let[session,loading]= useSession();
    let view=null
    if (session) {
        view=<>
        <Comp_Auth isLoggedIn={isLoggedIn} />
        <div className="white">
            <section id="" className="py-4 container" >
                <div className="container-fluid" style={{padding:0}}>
                    <div className="row " >
                        <div className="col-sm-6 container-fluid">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/assets/img/logo/logo.svg" alt="" style={{ width: "150px" }} /></a>
                            </div>
                        </div>
                        <div className="col-sm-6 container-fluid" style={{ color: "#4621ad",paddingRight:"50px" }}>
                            <i className='fas fa-wallet ' style={{ fontSize: "25px", color: "#4621ad" }}></i> SOURCE_BALANCE &nbsp; &nbsp; &nbsp;
                        <img src="/img/default-user-avatar.png" alt="" style={{ width: "40px" }} /><span>
                                <span className="dropdown" style={{ }}>
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
    }
    return <>{view} </>;
}



export { Comp_Header }