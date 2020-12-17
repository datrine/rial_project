import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { Comp_Header } from "./comp_header"
import { Comp_Carousel } from "../gen_page/comp_carousel"
//component for the mobile menu
function Comp_Dashboard({ isLoggedIn = true }) {
    /*<?php
    require './auth.php';
    require_once "./server.php";
    if(empty($_SESSION['user'])){
        header('location: login.php');
    }
    $myEmail = $_SESSION['user'];
    $source = mysqli_fetch_assoc(mysqli_query($conn,"SELECT * FROM wallet WHERE userEmail = '$myEmail'"));

?>

<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "datadb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 $result = $conn->query("SELECT * FROM transactions WHERE email ='$myEmail' ");
 $customer = $result->fetch_all(MYSQLI_ASSOC);

?> */
    return <>
        <section style={{marginTop:"200"}}>
            <Comp_Header />
            <div className="headtop">
                <section className="container justify-content-center">
                    <nav className="navbar navbar-expand-md navbar-light p-0 " id="navs" >

                        {/*<!-- Toggler/collapsibe Button -->*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/*<!-- Navbar links -->*/}
                        <div className="collapse navbar-collapse   " id="collapsibleNavbar">
                            <ul className="navbar-nav   w-100">



                                <li className="nav-item ">
                                    <Link href="/dashboard" passHref><a className="nav-link active" id="linkup"> <i className="fas fa-home" style={{fontSize:"25px", color:"#4621ad"}}></i> DASHBOARD </a></Link>  </li>


                                <li className="nav-item " >
                                    <Link href="/airtime" passHref><a className="nav-link" id="linkup" ><i className="fas fa-money-bill-wave" style={{fontSize:"25px", color:"#4621ad"}}></i> AIRTIME TO CASH</a></Link></li>
                                <li className="nav-item " >
                                    <Link href="/airtime" passHref><a className="nav-link " id="linkup" ><i className="fas fa-money-bill-wave" style={{fontSize:"25px", color:"#4621ad"}}></i> REFERALLS</a></Link>  </li>

                                <li className="nav-item " >
                                    <Link href="/wallet" passHref><a className="nav-link " id="linkup"><i className="fa fa-briefcase" style={{fontSize:"25px", color:"#4621ad"}}></i> WALLET</a></Link>
                                </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="/profile"  ><i className="fa fa-user" style={{fontSize:"25px", color:"#4621ad"}}></i> PROFILE</a>
                                </li>



                            </ul>
                        </div>
                    </nav>

                </section>

            </div>
            <div className="container mt-3">
                <Comp_Carousel />
            </div>
            <br /><br />

            <section className="body1">
                <div className="clearfix container">
                    <p className="float-right"><span><a href="index.php" className="bttn p-3">Home</a></span></p>
                    <p className="float-left text1 ">DASHBOARD</p>
                </div><br />
                <div className="container">

                    <a href="/topup" className="bttn p-3">Top Up Data</a>
                    <a href="/wallet" className="p-3 bttn1">Fund Wallet</a>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 " >

                            <div className="card bg-light  mt-2">
                                <div className="card-body  shadow p-4 ">
                                    <p className="card-text float-left">WALLET BALLANCE
                            <br /> <span>(₦) BALANCE</span></p>
                                    <i className='fas fa-wallet float-right' style={{fontSize:"25px", color:"#4621ad"}}></i>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card bg-light  mt-2">
                                <div className="card-body  shadow p-4  ">
                                    <p className="card-text float-left">Total Transactions
                            <br /> <span>₦0 </span></p>
                                    <i className='fa fas-line-chart float-right' style={{fontSize:"25px", color:"#4621ad"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="py-4 mb-5 container ">
                <div className="clearfix">
                    <div className="float-left  p-3 shadow-lg" style={{width: "100%", border: "1px solid #e3e3e3"}}>
                        <p> <b style={{color:"#4621ad"}}>Recent Transactions</b> </p>


                        <table className="table table-hover" width="100%" style={{textAlign: "center", border:  "1px solid #eee "}}>
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Email</th>
                                    <th>Amount </th>

                                    <th>Date | time</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CUSTOMER_REF</td>

                                    <td>CUSTOMER_EMAIL</td>
                                    <td> ₦CUSTOMER_AMOUNT</td>
                                    <td>CUSTOMER_DATE</td>




                                </tr>



                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
            <section className="p-3 mt-4" style={{backgroundColor: "#e3e3e3"}}>
                <div className="container">
                    <p>copyright 2020 &copy;. All right reserved.</p>
                </div>
            </section>
        </section>

    </>;
}



export { Comp_Dashboard }