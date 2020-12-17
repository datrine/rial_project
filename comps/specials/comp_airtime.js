import Link from 'next/link';
import Head from 'next/head'
import { Comp_Header } from '../comp_header';

let Comp_AirtimeTesting  = () => {
    return <>
    <div>fcgcfcgc</div>
    </>
}

let Comp_Airtime= () => {
    return <>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>Riah Topup</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="manifest" href="site.webmanifest" />
            <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.svg" />


            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="/assets/css/flaticon.css" />
            <link rel="stylesheet" href="/assets/css/slicknav.css" />
            <link rel="stylesheet" href="/assets/css/animate.min.css" />
            <link rel="stylesheet" href="/assets/font-awesome.min.css" />
            <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
            <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
            <link rel="stylesheet" href="/assets/css/themify-icons.css" />
            <link rel="stylesheet" href="/assets/css/slick.css" />
            <link rel="stylesheet" href="/assets/css/nice-select.css" />
            <link rel="stylesheet" href="/assets/css/style.css" />
            <link rel="stylesheet" href="/css/style.css" />
        </Head>

        {/*<!-- Preloader Start -->*/}
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src="/assets/img/logo/favicon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- Preloader Start -->*/}

        <section >
            <Comp_Header isLoggedIn={true} />
            <div className="headtop">
                <section className="container justify-content-center">
                    <nav className="navbar navbar-expand-md navbar-light p-0 " id="navs" >

                        { /*<!-- Toggler/collapsibe Button -->*/}
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
                                    <a className="nav-link" id="linkup" href="/pages" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> AIRTIME TO CASH</a>
                                </li>
                                <li className="nav-item " >
                                    <a className="nav-link" id="linkup" href="/" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> REFERALLS</a>
                                </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="/wallet"><i className="fa fa-briefcase" style={{ fontSize: "25px", color: "#4621ad" }}></i> WALLET</a>
                                </li>

                                <li className="nav-item " >
                                    <a className="nav-link " id="linkup" href="/profile"  ><i className="fa fa-user" style={{ fontSize: "25px", color: "#4621ad" }}></i> PROFILE</a>
                                </li>



                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
            <div className="container mt-3">
                <Comp_Airtime />
            </div>
            <br /><br />

            <section className="py-4 container">

                <div>

                </div>
            </section>


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
                                        <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>A2C Calculator</h4>
                                        <form className="form-group " action="">
                                            <select name="select" className="form-control w-100" required aria-hidden="true">
                                                <option value="">Select...</option>
                                                <option value="MTN TRANSFER">MTN TRANSFER</option>
                                                <option value="AIRTIME TRANSFER">AIRTIME TRANSFER</option>
                                                <option value="GLO TRANSFER">GLO TRANSFER</option>
                                                <option value="9MOBILE TRANSFER">9MOBILE TRANSFER</option>
                                                <option value="MTN VTU">MTN VTU</option>
                                                <option value="AIRTEL ERC">AIRTEL ERC</option>
                                                <option value="9MOBILE VTU">9MOBILE VTU</option>
                                                <option value="GLO E-TOP UP">GLO E-TOP UP</option>
                                            </select>
                                            <br />
                                            <br />
                                            <input className="form-control" type="text" style={{ padding: "25px 10px 25px 10px" }} name="" id="airtime" onkeyup="calculate()" placeholder="Airtime amount" /><br />

                                            <input className="form-control" type="text" style={{ padding: "25px 10px 25px 10px" }} name="" id="money" placeholder="You will recieve N0" readonly /><br />
                                            <br />
                                            <a name="submit" style={{ color: "#fff", fontFamily: "'Courier New', Courier, monospace", fontFamily: 600 }} className="btn card-btn1">Submit</a>
                                            <br />

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">

                        </div>
                    </div>

                    <p>
                        We buy Bulk Airtime of all Network (SnS/VTU) at a good rate starting from 5k & above with an instant payment to your bank account once verified.
                        You would need to chat with us to sell your excess airtime. Click the button below to start a conversation on WhatsApp with us . Thank you very much
    </p>
                    <a href="https://wa.me/+2348130335681" style={{ color: "#fff", fontFamily: "'Courier New', Courier, monospace", fontFamily: 600 }} className="btn card-btn1">
                        <img src="/img/002-whatsapp.svg" alt="" width="25px" /> &nbsp;Chat with us</a>
                </div>

            </section>
            <section className="p-3 mt-4" style={{ backgroundColor: "#e3e3e3" }}>
                <div className="container">
                    <p>copyright 2020 &copy;. All right reserved.</p>
                </div>
            </section>
        </section>


        <footer className=" " style={{ background: "#e3e3e3" }}>
            <div className="container">
                <p>copyright 2020 &copy;. All right reserved.</p>
            </div>
        </footer>


        {/*<!-- A2C Calculator-->*/}
        <script src="/assets/js/a2ccalculator.js"></script>

        {/*<!-- Best Pricing End -->
        <!-- Pricing Card Start -->*/}

        {/*<!-- All JS Custom Plugins Link Here here -->*/}
        <script src="/assets/js/vendor/modernizr-3.5.0.min.js"></script>


        <script src="/assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>

        <script src="/assets/js/jquery.slicknav.min.js"></script>


        <script src="/assets/js/owl.carousel.min.js"></script>
        <script src="/assets/js/slick.min.js"></script>


        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/animated.headline.js"></script>


        <script src="/assets/js/jquery.scrollUp.min.js"></script>
        <script src="/assets/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/jquery.sticky.js"></script>
        <script src="/assets/js/jquery.magnific-popup.js"></script>
        <script src="/assets/fontawesome.js"></script>

        <script src="/assets/js/contact.js"></script>
        <script src="/assets/js/jquery.form.js"></script>
        <script src="/assets/js/jquery.validate.min.js"></script>
        <script src="/assets/js/mail-script.js"></script>
        <script src="/assets/js/jquery.ajaxchimp.min.js"></script>

        <script src="/assets/js/plugins.js"></script>
        <script src="/assets/js/main.js"></script>
    </>
}
export { Comp_Airtime }
