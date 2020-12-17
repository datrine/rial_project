import Link from 'next/link';
import Head from 'next/head'
import { Header, CompHTMLHeader, Comp_Carousel, Scripts, CompPreloader } from "../comps/gen_page/gen_exporter"
export default function Login() {
    return <>
        <CompHTMLHeader />
        <CompPreloader/>
        <Header />
        <div style={{ marginTop: 100 }}>
            <div className="headtop">
                <section className="container justify-content-center">
                    <nav className="navbar navbar-expand-md navbar-light p-0 " id="navs" >

                        {/* <!-- Toggler/collapsibe Button -->*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* <!-- Navbar links -->*/}
                        <div className="collapse navbar-collapse   " id="collapsibleNavbar">
                            <ul className="navbar-nav   w-100">

                                <li className="nav-item ">
                                    <a className="nav-link active" href="dashboard" id="linkup"> <i className="fas fa-home" style={{ fontSize: "25px", color: "#4621ad" }}></i> DASHBOARD </a>
                                </li>

                                <li className="nav-item " >
                                    <Link href="/airtime" passHref><a className="nav-link" id="linkup" >
                                        <i className="fas fa-money-bill-wave"
                                            style={{ fontSize: "25px", color: "#4621ad" }}></i> AIRTIME TO CASH</a></Link> </li>
                                <li className="nav-item " >
                                    <Link href="/airtime" passHref><a className="nav-link" id="linkup" href="/airtime" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> REFERALLS</a></Link> </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="/wallet"><i className="fa fa-briefcase" style={{ fontSize: "25px", color: "#4621ad" }}></i> WALLET</a>
                                </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="/profile"  ><i className="fa fa-user" style={{ fontSize: "25px ", color: "#4621ad" }}></i> PROFILE</a>
                                </li>



                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
     
            <section className="body1">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-8 shadow-lg">
                            <div className="single-card  text-center mb-30">


                                <div className="card bg-light  mt-2">
                                    <div className="card-body  shadow p-4  ">
                                        <div className="card-top  bg-light">
                                            <p style={{ fontSize: "20px" }} className="pt-5 text-left ">PROFILE</p>
                                        </div>

                                        <div className="card-bottom">

                                            <form className="form-group " method="POST">
                                                <p className="text-danger"><b>LOGIN_ERR</b></p>



                                                <input className="form-control" style={{ padding: "25px 10px 25px 10px" }} value="USERNAME" type="text" name="" id="" readonly /><br />
                                                <input className="form-control" type="text" value="EMAIL" style={{ padding: "25px 10px 25px 10px" }} name="" id="" readonly /><br />
                                                <br />
                                                <input className="form-control" type="text" value="PHONE" style={{ padding: "25px 10px 25px 10px" }} name="" id="" readonly /><br />



                                                <p style={{ fontSize: "20px" }} className="p-2 text-left">Change Password</p>





                                                <input className="form-control" type="password" value="PASSWORD" style={{ padding: "25px 10px 25px 10px" }} name="" id="" readonly /><br />
                                                <input className="form-control" type="password" style={{ padding: "25px 10px 25px 10px" }} name="newPassword" id="" placeholder="Enter New Password" /><br />
                                                <input className="form-control" type="password" style={{ padding: "25px 10px 25px 10px" }} name="confirmPassword" id="" placeholder="Confirm Password" /><br />



                                                <input name="changePass" type="submit" style={{ color: "#fff", fontFamily: "'Courier New', Courier, monospace", fontFamily: 600 }} value="Submit" className="btn card-btn1" />
                                                <br />
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                </div>

                <section className="p-3 mt-4" style={{ backgroundColor: "#e3e3e3" }}>
                    <div className="container">
                        <p>copyright 2020 &copy;. All right reserved.</p>
                    </div>
                </section>
            </section>
        </div>
        <Scripts />
    </>
}

