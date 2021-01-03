import Link from 'next/link';
import { useState, useEffect } from "react"
import { signIn, signOut, useSession } from "next-auth/client";

let Comp_Login = ({ csrfToken, hookChangeRegState, callbackUrl }) => {
    let [emailOrUsernameState, changeEmailOrUsernameState] = useState("")
    let [passwordState, changePassWordState] = useState("")
    let [session, loading] = useSession()
    useEffect(() => {
    }, [])
    return <>
        <section id="services" className="best-pricing pricing-padding" data-background="/assets/img/gallery/best_pricingbg.jpg">
            <div className="container">
                {/*<!-- Section Tittle -->*/}
                <div className="row d-flex justify-content-center w3-pink">
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
                    <div className="col-xl-4 col-sm-2 col-lg-4 col-md-6">

                    </div>
                    <div className="col-xl-4 col-sm-8 col-lg-6 col-md-6 shadow-lg">
                        <div className="single-card  text-center mb-30">
                            <div className="card-top">
                                <span> </span>
                                <h4 >Welcome <span>Back!</span></h4>
                            </div>
                            <div className="card-bottom">
                                <p className="text-danger"><b></b></p>
                                <div className="form-group">
                                    <input className="form-control" style={{ padding: "25px 10px 25px 10px" }} type="text"
                                        name="userEmailOrName" id="" value={emailOrUsernameState}
                                        placeholder="Enter Email or Username" onChange={
                                            e => {
                                                changeEmailOrUsernameState(e.target.value)
                                            }
                                        } /><br />
                                    <input className="form-control" type="password" style={{ padding: "25px 10px 25px 10px" }}
                                        name="password" id="" value={passwordState}
                                        placeholder="Enter Password" onChange={
                                            e => {
                                                changePassWordState(e.target.value)
                                            }
                                        } /><br />
                                    <br />
                                    <input type="button" style={{
                                        color: "", fontFamily: " 'Courier New', Courier, monospace",
                                        fontFamily: 600
                                    }} value="Login Account" className="btn card-btn1 w3-cyan"
                                        name="login" id="login" onClick={
                                            e => {
                                                signIn("credentials", {
                                                    callbackUrl, password: passwordState,
                                                    userEmailOrName: emailOrUsernameState
                                                });
                                            }
                                        } />
                                    <br /><br />
                                    <p className="text-center">
                                        <Link href="/forget_password">
                                            <a style={{ color: "#b626bf" }}>forget password</a></Link>   <br />
                                        <Link href="/register">
                                            <a style={{ fontWeight: "600", color: "#b626bf" }}>Create an Account</a>
                                        </Link>
                                    </p>
                                </div>

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
