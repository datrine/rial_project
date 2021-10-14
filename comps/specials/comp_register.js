import { useEffect, useState } from "react";
import Link from "next/link"
import { registerValidator, fetchError } from "../../utils/validators"
import { signIn, signOut, useSession } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    let [instanceState, changeInstanceState] = useState({
        password: "",
        repass: "",
        username: "",
        phone_num: "",
        referrer: "",
        email: ""
    });
    //console.log(instanceState)
    let [validState, changeValidState] = useState(false)
    let [errorListState, changeErrorListState] = useState([])
    let [usernameState, changeUsernameState] = useState("")
    let [emailState, changeEmailState] = useState("")
    let [phone_numState, changeUserPhoneState] = useState("")
    let [passwrdState, changePassWrdState] = useState("")
    let [repassState, changeRepassState] = useState("")
    let [referrerState, changeReferralState] = useState("")
    let [changedState, changeChangedState] = useState(0)
    let [isValidatingusernameState, changeIsValidatingusernameState] = useState(false)
    let [isValidatingUserEmailState, changeIsValidatingUserEmailState] = useState(false)
    let usernameValidObj = fetchError({ errorList: errorListState, prop: "username" });
    let emailValidObj = fetchError({ errorList: errorListState, prop: "email" })
    let [canSubmit, toggleCanSubmit] = useState(validState)
    let [isSubmittingState, changeIsSubmittingState] = useState(false)

    useEffect(() => {
        if (changedState > 0) {
            (async () => {
                changeIsValidatingusernameState(true)
                changeIsValidatingUserEmailState(true)
                let res = await registerValidator({
                    email: emailState,
                    password: passwrdState,
                    phone_num: phone_numState,
                    username: usernameState,
                    repass: repassState,
                    referrer: referrerState,
                    changedState
                });
                let { instance, valid, errorList } = res
                changeInstanceState({ ...instance });
                changeValidState(valid);
                changeErrorListState(errorList);
                changeIsValidatingusernameState(false)
                changeIsValidatingUserEmailState(false)
            })()
        }
    }, [changedState])
    useEffect(() => {
        toggleCanSubmit(validState)
    }, [validState])

    return <>
        <div className="card-bottom">
            <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>Create an Account!</h4>
            <p><b style={{ color: "red" }}>{
                (!canSubmit ? "Some errors in the form" : "")
            }</b></p>
            <form onSubmit={
                async e => {
                    e.preventDefault();
                    changeIsSubmittingState(true)
                    try {
                        let res = await fetch("/api/register", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(instanceState)
                        });
                        if (res.ok) {
                            let data = await res.json()
                            user = instanceState;
                            changeInstanceState(data)
                            if (data) {
                                hookChangeRegState("success")
                            }
                        }
                    } catch (error) {
                        console.log(error)
                    }
                    changeIsSubmittingState(false)
                }
            } className="form-group " action="" method="POST">

                <input value={emailState} className="form-control" onChange={
                    e => {
                        changeEmailState(e.target.value)
                        changeChangedState(changedState + 1)
                    }
                } type="email"
                    style={{ padding: "25px 10px 25px 10px" }} name="email"
                    placeholder="Enter Email" required />
                <p style={{
                    color: isValidatingusernameState ? "green" :
                        ((emailValidObj?.msg) ? "red" : "green"),
                    textAlign: "left", fontSize: "13px"
                }}>{
                        isValidatingUserEmailState ? <FontAwesomeIcon icon={faSpinner} spin /> :
                            (emailValidObj?.msg ? (<span><FontAwesomeIcon icon={faTimes} />
                                <i className="w3-margin-left">{emailValidObj.msg}</i>
                            </span>) : (emailState.length > 0 ?
                                <span><FontAwesomeIcon icon={faCheck} /> Validated</span> : "Required"))
                    }
                </p>
                <div className="row">
                    <div className="col-md-6">

                        <input className="form-control" style={{ padding: "25px 10px 25px 10px" }}
                            type="text" name="username" value={usernameState} onChange={
                                e => {
                                    changeUsernameState(e.target.value)
                                    changeChangedState(changedState + 1)
                                }
                            } placeholder="Enter user name" required />
                        <p style={{
                            color: isValidatingusernameState ? "green" : ((usernameValidObj?.msg) ? "red" : "green"),
                            textAlign: "left", fontSize: "13px"
                        }}>{
                                isValidatingusernameState ? <FontAwesomeIcon icon={faSpinner} spin /> :
                                    (usernameValidObj.msg ? (<span><FontAwesomeIcon icon={faTimes} />
                                        <i className="w3-margin-left">{usernameValidObj.msg}</i>
                                    </span>) : (usernameState.length > 0 ?
                                        <span><FontAwesomeIcon icon={faCheck} /> Validated</span> : "Required"))
                            }
                        </p>

                        <input value={phone_numState} className="form-control" onChange={
                            e => {
                                changeUserPhoneState(e.target.value)
                                changeChangedState(changedState + 1)
                            }
                        } type="tel"
                            style={{ padding: "25px 10px 25px 10px" }} name="phone_num"
                            placeholder="Enter Phone eg. +2348088367337" />
                        <p style={{ textAlign: "left", color: "red", fontStyle: "italic", fontSize: "13px" }}>{
                            fetchError({ errorList: errorListState, prop: "phone_num" })?.msg
                        }
                        </p>
                    </div>
                    <div className="col-md-6">
                        <input value={passwrdState} onChange={
                            e => {
                                changePassWrdState(e.target.value)
                                changeChangedState(changedState + 1)
                            }
                        } className="form-control" type="password"
                            style={{ padding: "25px 10px 25px 10px" }} name="password"
                            placeholder="Enter Password" required />
                        <p style={{ textAlign: "left", color: "red", fontStyle: "italic", fontSize: "13px" }}>{
                            fetchError({ errorList: errorListState, prop: "password" })?.msg
                        }
                        </p>
                        <input value={repassState} onChange={
                            e => {
                                changeRepassState(e.target.value)
                                changeChangedState(changedState + 1)
                            }
                        } className="form-control" type="password"
                            style={{ padding: "25px 10px 25px 10px" }} name="repass"
                            placeholder="Enter Comfirm Password" required />
                        <p style={{ textAlign: "left", color: "red", fontStyle: "italic", fontSize: "13px" }}>{
                            passwrdState.length > 0 && passwrdState !== repassState ? "Passwords don't match" : ""
                        }
                        </p>
                    </div>
                </div>
                <input className="form-control" type="text"
                    style={{ padding: "25px 10px 25px 10px" }} name="referrer"
                    placeholder="Who Refer you? (Optional)" />
                <button disabled={!canSubmit} type="submit"
                    style={{
                        color: "#fff", fontFamily: 600,
                        fontFamily: "'Courier New', Courier, monospace", marginTop: "10px"
                    }} className="btn card-btn1 w3-cyan" name="register">
                    {isSubmittingState ? <FontAwesomeIcon icon={faSpinner} spin /> : "Register Account"}
                </button>
                <p className="text-center">
                    <a href="/forget_password" style={{ color: "#b626bf" }}>Forget Password?</a><br />
                    <a href="/login" style={{ color: "#b626bf" }}>Already have an account? Login</a>
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
                        let { password, username, email, ...rest } = user
                        signIn("credentials", {
                            callbackUrl:"login",
                            username,
                            identifier: (email || username),
                            password: password, email: email, ...rest,
                            
                        })
                    }
                }>Log in to Continue</button>
            </p>
        </div>
    </>
}
export { Comp_Register }