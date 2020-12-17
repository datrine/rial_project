import { useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faBars, faHome, faListAlt, faCartPlus, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"
import { Comp_Auth } from "./comp_auth"
//component for the mobile menu
function Comp_Header({ isLoggedIn = true }) {
    /*<?php
    require './auth.php';
    require_once "./server.php";
    if(empty($_SESSION['user'])){
        header('location: login.php');
    }
    $myEmail = $_SESSION['user'];
    $source = mysqli_fetch_assoc(mysqli_query($conn,"SELECT * FROM wallet WHERE userEmail = '$myEmail'"));

?>*/
    return <> 
    <Comp_Auth isLoggedIn={isLoggedIn} />
        <div className="white">
            <section id="" className="py-4 container" >
                <div>
                    <div className="clearfix " >
                        <div className="float-left">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/assets/img/logo/logo.svg" alt="" style={{width:"150px"}} /></a>
                            </div>
                        </div>
                        <div className="float-right " style={{ color:"#4621ad"}}>
                            <i className='fas fa-wallet ' style={{fontSize:"25px", color:"#4621ad"}}></i> SOURCE_BALANCE &nbsp; &nbsp; &nbsp;
                        <img src="img/default-user-avatar.png" alt="" style={{width:"40px"}} /><span>
                                <span className="dropdown">
                                    <a className=" dropdown-toggle" data-toggle="dropdown">
                                        SESSION_USERNAME &nbsp;</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/profile">
                                            <i className='fas fa-user ' style={{fontSize:"15px", color:"#4621ad"}}></i>&nbsp;Profile</a>
                                        <a className="dropdown-item" href="/logout">
                                            <i className='fas fa-wallet ' style={{ fontSize: "15px", color: "#4621ad" }}></i>&nbsp;Sign Out</a>

                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>;
}



export { Comp_Header }