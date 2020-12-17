import { useState } from "react";
import Link from "next/link"
import Head from "next/head"
//component for the mobile menu
function Comp_Register({ isLoggedIn = true }) {
   /* <?php require_once "server.php";
    if (isset($_GET['ref'])){
        $_SESSION['ref'] = $_GET['ref'];
        if($_SESSION["user"] != "user"){
            header('location: login.php');
        }
    }
    ?>*/
    return <>
    
    <section id="services" className="best-pricing pricing-padding" data-background="/assets/img/gallery/best_pricingbg.jpg">
                <div className="container">
                    {/*<!-- Section Tittle -->*/}
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-8">
                           
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Best Pricing End -->
            <!-- Pricing Card Start -->*/}
            <div className="pricing-card-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                           
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 shadow-lg">
                            <div className="single-card  text-center mb-30">
                               
                                <div className="card-bottom">
                                <h4 style={{fontSize:"25px", paddingBottom:"10px"}}>Create an Account!</h4>
                                <p className="text-danger"><b>php echo $registerErr;</b></p>
                                <form className="form-group " action="" method="POST">
                                    <input className="form-control" style={{padding:"25px 10px 25px 10px"}} type="text" name="userName" id="" placeholder="Enter Name" required/><span className="text-danger">* <b>USERNAME_ERR</b></span><br/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input className="form-control" type="email"  style={{padding:"25px 10px 25px 10px"}} name="userEmail" id="" placeholder="Enter Email" required/><span className="text-danger">* <b>php echo $userEmailErr;</b></span> <br/>
                                            <input className="form-control" type="tel"  style={{padding:"25px 10px 25px 10px"}} name="userPhone" id="" placeholder="Enter Phone eg. +2348088367337"/><span className="text-danger">* <b>php echo $userPhoneErr;</b></span> <br/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" type="password"  style={{padding:"25px 10px 25px 10px"}} name="userPass1" id="" placeholder="Enter Password" required/><span className="text-danger">* <b>php echo $userPassErr;</b></span> <br/>
                                            <input className="form-control" type="password"  style={{padding:"25px 10px 25px 10px"}} name="userPass2" id="" placeholder="Enter Comfirm Password" required/><br/>
                                        </div>
                                    </div>
                                    <input className="form-control" type="text"  style={{padding:"25px 10px 25px 10px"}} name="ref" id="" placeholder="Who Refer you? (Optional)"value=""/><br/>
                                    <br/>
                                    <input type="submit" style={{color:"#fff" , fontFamily: "'Courier New', Courier, monospace",fontFamily:600}} value="Register Account" className="btn card-btn1" name="register" id=""/>
                                        <br/>
                                        <p className="text-center">
                                     <a href="/forget_password" style={{color:"#b626bf"}}>Forget Password?</a><br/>
                                    <a href="/login"  style={{color:"#b626bf"}}>Already have an account?Login?</a>
                                    </p>
                                </form>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                           
                        </div>
                    </div>
                </div>
            </div>
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
    
        <script src="/assets/js/contact.js"></script>
        <script src="/assets/js/jquery.form.js"></script>
        <script src="/assets/js/jquery.validate.min.js"></script>
        <script src="/assets/js/mail-script.js"></script>
        <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
        	
        <script src="/assets/js/plugins.js"></script>
        <script src="/assets/js/main.js"></script>
    </>;
}



export { Comp_Register }