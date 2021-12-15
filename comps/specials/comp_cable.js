import Link from 'next/link';
import Head from 'next/head'
import { Comp_Header } from './comp_header';
import { SubHeader } from './comp_sub_header';
import { buyAirtime } from "../../utils/airtime"
import { checkUserDetails } from "../../utils/userAcc"
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { fetchError, phoneValidator } from '../../utils/validators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DashboardFooter from './dashboard_footer';

let Comp_CableTV = ({ user }) => {
    let [session] = useSession()
    let [rialAccDetails, changeRialAccDetails] = useState({})
    let [resType, changeResType] = useState("none")
    let [resInfo, changeResInfo] = useState({})
    let onSuccess = (res) => {
        alert("Recharge successful")
        changeResType("success")
        changeResInfo(res)
    }

    let onFailure = ({ err }) => {
        console.log(err)
        changeResType("failure")
        changeResInfo(err)
    }

    useEffect(() => {
        (async () => {
            let { err, res } = await checkUserDetails();
            if (res) {
                changeRialAccDetails(res)
            } else if (err) {
                console.log(err)
            }
        })();
    }, []);

    let view = null
    if (session) {
        console.log("session")
        console.log(session)
        switch (resType) {
            case "success":
                view = <><SuccessfulRecharge resInfo={resInfo}
                    hookChangeResType={changeResType} /></>
                break;
            case "failure":
                view = <><FailedRecharge resInfo={resInfo}
                    hookChangeResType={changeResType} />
                </>
                break;

            case "none":
                view = null
                break;
            default:
                view = null
                break;
        }
        return <>
            <section >
                <Comp_Header isLoggedIn={true} />
                <SubHeader />
                <section className=" " style={{ marginTop: "10px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3">

                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 shadow-lg">
                                <div className="card bg-light  mt-2">
                                    <div className="card-body  shadow p-4  ">
                                        <div className="card-bottom">
                                            <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>A2C Calculator</h4>

                                            <FormCableTV
                                                onSuccess={onSuccess} onFailure={onFailure}
                                                user={user} />
                                        </div>
                                    </div>
                                </div>
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
                <DashboardFooter />
            </section>
            {/*<!-- A2C Calculator-->*/}
            {view}
            <script src="/assets/js/a2ccalculator.js"></script>
        </>;
    }

    return <>
    </>
}

function FormCableTV({ user, onSuccess = () => { }, onFailure = () => { } }) {
    let [airtimeAmountState, changeAirtimeAmountState] = useState(0)
    let [phoneNumState, changePhoneNumState] = useState("")
    let [operatorState, changeOperatorState] = useState("MTN")
    let [changedState, changeChangedState] = useState(0)
    let [validState, changeValidState] = useState(false)
    let [errorListState, changeErrorListState] = useState([])
    let [isValidatingPhoneNumState, changeIsValidatingPhoneNumState] = useState(false)
    let phoneNumValidObj = fetchError({ errorList: errorListState, prop: "phoneNum" });
    let operatorValidObj = fetchError({ errorList: errorListState, prop: "operator" })
    let [canSubmit, toggleCanSubmit] = useState(validState)
    let [isSubmittingState, changeIsSubmittingState] = useState(false);
    useEffect(() => {
        let res = phoneValidator({ phoneNum: phoneNumState, operator: operatorState });
        let { valid, errorList, instance } = res
        changeValidState(valid)
        changeErrorListState(errorList)
    }, [changedState])
    return <>
        <form className="form-group " action="" onSubmit={
            async e => {
                try {
                    e.preventDefault();
                    let res = await fetch("/api/pay/cable_tv", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            serviceID: operatorState,
                            phone: phoneNumState,
                            email: user.email,
                            amount: airtimeAmountState,
                        })
                    });
                    let data = await res.json();
                    let { saved, err, } = data
                    if (err) {
                        console.log(err)
                        onFailure({ err, })
                    }
                    if (saved) {
                        console.log(saved)
                        onSuccess(saved)
                    }
                } catch (error) {
                    console.log(error)
                    onFailure({ err: error })
                }
            }
        }>
            <div className="form-group">
                <select className="form-control" required
                    style={{ display: "block" }} >
                    <option value="">Select</option>
                    <option value="">DSTV</option>
                    <option value="">GoTV</option>
                    <option value="">Startimes</option>
                    <option value="">PHCN</option>
                </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control w-100" placeholder="Card Number" required />
            </div>
            <div className="form-group" id="card-select">
            </div>
            <br />
            <button name="buy" className="p-3  btt">Buy now..</button>
            <br />
        </form>
    </>
}

function calculateAirtime(airtime) {
    let money;
    money = Math.floor(airtime * 1.00);
    return `You receive N ${money} worth of airtime.`
}

function SuccessfulRecharge({ resInfo, hookChangeResType }) {
    return <>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            position: "absolute", backgroundColor: "transparent", top: 0, bottom: 0, left: 0, right: 0
        }}>
            <p style={{
                position: "absolute",
                top: 0, bottom: 0, left: 0, right: 0, textAlign: "right"
            }}>
                <button onClick={
                    e => {
                        hookChangeResType("none")
                    }
                } className="w3-btn w3-text-red">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </p>
            <p>
                <span>Succesful transaction</span>
            </p>
        </div></>
}

function FailedRecharge({ resInfo, hookChangeResType }) {
    console.log(resInfo)
    return <>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            position: "absolute", top: 0, right: 0, bottom: 0, left: 0

        }}>
            <div style={{ backgroundColor: "rgba(0,0,0,0.8)", width: "250px" }}>
                <p><span className="w3-text-red" style={{ marginLeft: "49%" }}>Oops!!</span>
                    <button onClick={
                        e => {
                            hookChangeResType("none")
                        }
                    } className="w3-btn w3-text-red float-right">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </p>
                <p className="w3-padding w3-text-red" >
                    <span>Transaction failed</span>
                </p>
                <p className="w3-padding w3-text-white" >
                    {resInfo}
                </p>
            </div>
        </div></>
}

export { Comp_CableTV, FormCableTV }
