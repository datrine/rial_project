import Link from 'next/link';
import dynamic from "next/dynamic"

let Comp_Login = () => {
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
        {/* <!-- Best Pricing End -->
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
                                <h4 >Welcome <span>Back!</span></h4>
                            </div>
                            <div className="card-bottom">
                                <p className="text-danger"><b>php echo $loginErr;</b></p>
                                <form className="form-group" action="server.php" method="POST">
                                    <input className="form-control" style={{ padding: "25px 10px 25px 10px" }} type="text" name="userEmail" id="" placeholder="Enter Email" /><br />
                                    <input className="form-control" type="password" style={{ padding: "25px 10px 25px 10px" }} name="userPass" id="" placeholder="Enter Password" /><br />
                                    <br />
                                    <input type="submit" style={{
                                        color: "#fff", fontFamily: " 'Courier New', Courier, monospace",
                                        fontFamily: 600
                                    }} value="Login Account" className="btn card-btn1" name="login" id="login" />
                                    <br /><br />
                                    <p className="text-center">
                                        <Link href="/forget_password"><a style={{ color: "#b626bf" }}>forget password</a></Link>   <br />
                                        <Link href="/register"><a style={{ fontWeight: "600", color: "#b626bf" }}>Create an Account</a></Link>              </p>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">

                    </div>
                </div>
            </div>
        </div>
    </>
}

export { Comp_Login }
