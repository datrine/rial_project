import Link from 'next/link';
import Head from 'next/head'
import { Comp_Header } from './comp_header';
import { Comp_Auth } from './comp_auth';
import { Comp_Carousel } from '../gen_page/comp_carousel';

let Comp_Wallet = () => {
    return <>
        <Comp_Auth />
        <section>
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
                                    <a className="nav-link active" href="/dashboard" id="linkup"> <i className="fas fa-home" style={{ fontSize: "25px", color: "#4621ad" }}></i> DASHBOARD </a>
                                </li>


                                <li className="nav-item " >
                                    <a className="nav-link" id="linkup" href="/airtime" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> AIRTIME TO CASH</a>
                                </li>
                                <li className="nav-item " >
                                    <a className="nav-link" id="linkup" href="/airtime" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> REFERALLS</a>
                                </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="wallet.php"><i className="fa fa-briefcase" style={{ fontSize: "25px", color: "#4621ad" }}></i> WALLET</a>
                                </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="profile.php"  ><i className="fa fa-user" style={{ fontSize: "25px", color: "#4621ad" }}></i> PROFILE</a>
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
            <section className=" ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 shadow-lg">


                            <div className="card bg-light  mt-2">
                                <div className="card-body  shadow p-4  ">
                                    <div className="card-bottom">
                                        <br />
                                        <h4 className="p-2">Wallet Top-up<span>Amount</span></h4>
                                    </div>
                                    <div className="card-bottom">
                                        <form className="form-group" action="initialize.php" method="POST">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basiaddon1">₦</span>
                                                </div>
                                                <input type="text" className="form-control" name="amount" placeholder="Amount" aria-label="Amount" aria-describedby="basiaddon1" />
                                            </div>
                                            <input type="submit" value="PAY" name="pay" style={{ color: "#fff", fontFamily: 600 }} className="btn card-btn1" />
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </section>
        {/*<!-- A2C Calculator-->*/}
        <script src="/assets/js/a2ccalculator.js"></script>
    </>
}

export { Comp_Wallet }
