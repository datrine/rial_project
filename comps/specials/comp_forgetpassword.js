
import Head from 'next/head';
//component for the mobile menu
function Comp_ForgetPass({ }) {
    /*?php 
    require_once "./server.php";

   

?>




<?php

include_once 'dbconn.php';
if(isset($_POST['submit']))
{
    $user_id = $_POST['user_id'];
    $result = mysqli_query($conn,"SELECT * FROM users where id='" . $_POST['user_id'] . "'");
    $row = mysqli_fetch_assoc($result);
    $fetch_user_id=$row['id'];
    $email_id=$row['userEmail'];
    $password=$row['userPass'];
    if($user_id==$fetch_user_id) {
                $to = $email_id;
                $subject = "Password";
                $txt = "Your new password is : $password.";
                $headers = "From: RaishTopup@gmail.com" . "\r\n" .
                "CC: $email_id";
                mail($to,$subject,$txt,$headers);
            }
                else{
                    echo 'invalid userid';
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
        <div className="pricing-card-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">

                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 shadow-lg">
                        <div className="single-card  text-center mb-30">
                            <div className="card-top">
                                <span> </span>
                                <h4 >Reset Password</h4>
                            </div>
                            <div className="card-bottom">
                                <form className="form-group" action="">
                                    <input className="form-control" style={{ padding: "25px 10px 25px 10px" }} type="text" name='user_id' id="" placeholder="Enter Email" /><br />
                                    <a name="submit" style={{ color: "#fff", fontFamily: " 'Courier New', Courier, monospace", fontFamily: 600 }} className="btn card-btn1">Send Reset Password Link</a>


                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">

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



export { Comp_ForgetPass }