import Link from 'next/link';
import Head from 'next/head'
import { Header, CompHTMLHeader, Comp_Carousel, Scripts, CompPreloader } from "../comps/gen_page/gen_exporter"
import { useSession } from 'next-auth/client';
import { SubHeader } from '../comps/specials/comp_sub_header';
import { Comp_Header } from '../comps/specials/comp_header';
import { useEffect, useState } from 'react';
export default function Profile() {
    let [session, loading] = useSession()
    console.log(session)
    let [userState, changeUserState] = useState({});
    useEffect(() => {
        if (session) {
            changeUserState(session.user)
        }
    }, [session])
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        <Comp_Header />
        <br />
        <SubHeader />
        <Comp_Profile user={userState} /> <Scripts />
    </>
}

let Comp_Profile = ({ user }) => {

    let [emailState, changeEmailState] = useState(user.userEmail)
    let [usernameState, changeUsernameState] = useState(user.userName)
    let [passwordState, changePasswordState] = useState(user.userPass)
    let [phoneNumState, changePhoneNumState] = useState(user.userPhone)
    return <>
        <div>
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
                                                <p className="text-danger"><b></b></p>
                                                <input className="form-control" style={{ padding: "25px 10px 25px 10px" }} defaultValue={user.userName} type="text" name="" id="" readonly /><br />
                                                <input className="form-control" type="text" defaultValue={user.userEmail} style={{ padding: "25px 10px 25px 10px" }} name="" id="" readonly /><br />
                                                <br />
                                                <input className="form-control" type="text" defaultValue={user.userPhone} style={{ padding: "25px 10px 25px 10px" }} name="" id="" readonly /><br />
                                                <p style={{ fontSize: "20px" }} className="p-2 text-left">Change Password</p>
                                                <input className="form-control" type="password" defaultValue={user.userPass} style={{ padding: "25px 10px 25px 10px" }} name="" id="" readonly /><br />
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
