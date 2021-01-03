import { useEffect, useState } from "react";
import Link from "next/link"
import { registerValidator, fetchError } from "../../utils/validators"
import { signIn, signOut, useSession } from "next-auth/client";

let user = {}
function Comp_Register({ isLoggedIn = true }) {
    let [session, loading] = useSession()
    let [regState, changeRegState] = useState("register")
    let view = null
    console.log(session)
    if (session) {
        view = <>
            <div>
                <p>You are already registered as <strong>{session.user.username}</strong></p>
                <p style={{ textAlign: "center" }}>
                    <button onClick={signOut} className="w3-btn w3-red w3-text-white">Sign out</button></p>
                <p style={{ textAlign: "center" }}>
                    <Link href="/dashboard"><a className="w3-btn">Visit Dashboard</a></Link></p>
            </div></>
    }
    else {
        switch (regState) {
            case "register":
                view = <FormRegister hookChangeRegState={changeRegState} />
                break;

            case "success":
                view = <SuccessfulReg />
                break;
            default:
                break;
        }
    }
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
                    <div className="col-xl-3 col-sm-2 col-lg-3 col-md-3">

                    </div>
                    <div className="col-xl-6 col-sm-8 col-lg-6 col-md-6 shadow-lg">
                        <div className="single-card  text-center mb-30">
                            {view}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">

                    </div>
                </div>
            </div>
        </div>
    </>;
}

let FormRegister = ({ hookChangeRegState }) => {
    let [usernameState, changeUsernameState] = useState("")
    let [emailState, changeEmailState] = useState("")
    let [userPhoneState, changeUserPhoneState] = useState("")
    let [passwrdState, changePassWrdState] = useState("")
    let [repassState, changeRepassState] = useState("")
    let [referralState, changeReferralState] = useState("")
    let val = registerValidator({
        userEmail: emailState,
        userPass: passwrdState,
        userPhone: userPhoneState,
        userName: usernameState,
        userRePass: repassState,
        referral: referralState
    });
    //console.log(val.errors)
    let [canSubmit, toggleCanSubmit] = useState(val.valid)
    useEffect(() => {
        toggleCanSubmit(val.valid)
    }, [val.valid])
    return <>
        <div className="card-bottom">
            <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>Create an Account!</h4>
            <p className="text-danger"><b>{
                (!canSubmit ? "Some Errors In The Form" : "")
            }</b></p>
            <form onSubmit={
                async e => {
                    e.preventDefault();
                    try {
                        let res = await fetch("/api/register", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(val.instance)
                        });
                        if (res.ok) {
                            let data = await res.json()
                            console.log(val.instance)
                            user = val.instance
                            /* await signIn("credentials", {
                                 username: val.instance.userName,
                                 password: val.instance.userPass
                             })*/
                            if (data) {
                                hookChangeRegState("success")
                            }
                        }
                    } catch (error) {
                        console.log(error)
                    }

                }
            } className="form-group " action="" method="POST">
                <p style={{ paddingBottom: 0, marginBottom: 0, textAlign: "left", color: "red" }}>*</p>
                <input className="form-control" style={{ padding: "25px 10px 25px 10px" }}
                    type="text" name="userName" value={usernameState} onChange={
                        e => {
                            changeUsernameState(e.target.value)
                        }
                    } placeholder="Enter user name" required />
                <span className="text-danger"> <b>{
                    fetchError({ valObj: val, property: "userName" })?.message
                }</b>
                </span>
                <div className="row">
                    <div className="col-md-6">
                        <p style={{ paddingBottom: 0, marginBottom: 0, textAlign: "left", color: "red" }}>*</p>
                        <input value={emailState} className="form-control" onChange={
                            e => {
                                changeEmailState(e.target.value)
                            }
                        } type="email"
                            style={{ padding: "25px 10px 25px 10px" }} name="userEmail"
                            placeholder="Enter Email" required />
                        <span className="text-danger">* <b>{
                            fetchError({ valObj: val, property: "userEmail" })?.message
                        }</b>
                        </span>
                        <p style={{ paddingBottom: 0, marginBottom: 0, textAlign: "left", color: "red" }}>*</p>
                        <input value={userPhoneState} className="form-control" onChange={
                            e => {
                                changeUserPhoneState(e.target.value)
                            }
                        } type="tel"
                            style={{ padding: "25px 10px 25px 10px" }} name="userPhone"
                            placeholder="Enter Phone eg. +2348088367337" />
                        <span className="text-danger">* <b>{
                            fetchError({ valObj: val, property: "userPhone" })?.message
                        }</b>
                        </span>
                    </div>
                    <div className="col-md-6">
                        <p style={{ paddingBottom: 0, marginBottom: 0, textAlign: "left", color: "red" }}>*</p>
                        <input value={passwrdState} onChange={
                            e => {
                                changePassWrdState(e.target.value)
                            }
                        } className="form-control" type="password"
                            style={{ padding: "25px 10px 25px 10px" }} name="userPass"
                            placeholder="Enter Password" required />
                        <span className="text-danger"><b>{
                            passwrdState.length > 0 && passwrdState !== repassState ? "Passwords don't match" : ""
                        }</b>
                        </span>
                        <p style={{ paddingBottom: 0, marginBottom: 0, textAlign: "left", color: "red" }}>*</p>
                        <input value={repassState} onChange={
                            e => {
                                changeRepassState(e.target.value)
                            }
                        } className="form-control" type="password"
                            style={{ padding: "25px 10px 25px 10px" }} name="userRePass"
                            placeholder="Enter Comfirm Password" required />
                        <span className="text-danger"><b>{
                            passwrdState.length > 0 && passwrdState !== repassState ? "Passwords don't match" : ""
                        }</b>
                        </span>
                    </div>
                </div>
                <input className="form-control" type="text"
                    style={{ padding: "25px 10px 25px 10px" }} name="referral"
                    placeholder="Who Refer you? (Optional)" />
                <input disabled={!canSubmit} type="submit"
                    style={{
                        color: "#fff", fontFamily: 600,
                        fontFamily: "'Courier New', Courier, monospace",
                    }} value="Register Account" className="btn card-btn1 w3-cyan" name="register" />
                <p className="text-center">
                    <a href="/forget_password" style={{ color: "#b626bf" }}>Forget Password?</a><br />
                    <a href="/login" style={{ color: "#b626bf" }}>Already have an account?Login?</a>
                </p>
            </form>
        </div></>
}
let SuccessfulReg = () => {
    return <>
        <div className="card-bottom">
            <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>
                Thank you for registering with us!</h4>
            <p>
                <button className="w3-btn w3-green w3-text-white" onClick={
                    e => {
                        let { userPass, userName, userEmail, ...rest } = user
                        signIn("credentials", { username: userName, password: userPass, email: userEmail, ...rest })
                    }
                }>Log in to Continue</button>
            </p>
        </div>
    </>
}
export { Comp_Register }