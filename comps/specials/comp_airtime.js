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
import { LogoBar, ProfileBar } from './reusables';

let Comp_Airtime = ({ user }) => {
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
            <div className="w3-container"
                style={{
                    paddingTop: 10, paddingLeft: 5,
                    display: "flex", justifyContent: "space-between"
                }}>
                <SubHeader />

                <ProfileBar />
            </div>

            <div className="w3-container"
                style={{
                    paddingTop: 10, paddingLeft: 5,
                    display: "flex", justifyContent: "center"
                }}>
                <LogoBar />
            </div>
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

                                        <FormAirtime
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
            {/*<!-- A2C Calculator-->*/}
            {view}
            <script src="/assets/js/a2ccalculator.js"></script>
        </>;
    }

    return <>
    </>
}

function FormAirtime({ user, onSuccess = () => { }, onFailure = () => { } }) {
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
        <form className="form-group " className="" onSubmit={
            async e => {
                try {
                    e.preventDefault();
                    let res = await fetch("/api/pay/airtime", {
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
            {typeof window !== "undefined" ?
                <select value={operatorState}
                    onChange={
                        e => {
                            changeOperatorState(e.target.value)
                            changeChangedState(changedState + 1)
                        }
                    } className="form-control w-100" suppressHydrationWarning>
                    <option value="">Select...</option>
                    <option value="mtn">MTN Recharge</option>
                    <option value="glo">GLO Recharge</option>
                    <option value="etisalat">9mobile Recharge</option>
                    <option value="airtel">AIRTEL Recharge</option>
                </select> : null}
            {operatorValidObj?.msg}
            <br />

            <input value={phoneNumState} className="form-control" type="text"
                style={{ padding: "25px 10px 25px 10px" }} onChange={
                    e => {
                        changePhoneNumState(e.target.value)
                        changeChangedState(changedState + 1)
                    }
                } placeholder="Phone number" />
            {phoneNumValidObj?.msg}
            <br />

            <input className="form-control" type="text"
                style={{ padding: "25px 10px 25px 10px" }} name=""
                id="airtime" onChange={
                    e => {
                        changeAirtimeAmountState(e.target.value)
                    }
                } placeholder="Airtime amount" />
            <br />

            <input className="form-control" type="text"
                style={{ padding: "25px 10px 25px 10px" }} value={calculateAirtime(airtimeAmountState)}
                placeholder="You will recieve N 0" readOnly />
            <br />

            <a name="submit" style={{
                color: "#fff",
                fontFamily: "'Courier New', Courier, monospace", fontFamily: 600
            }}
                className="btn card-btn1">Submit</a>
            <br />

            <button type="submit" name="buy"
                disabled={!validState} className="p-3  btt">Buy nowo</button>
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
            position: "absolute", backgroundColor: "rgba(0,0,0,0.5)", top: 0, bottom: 0, left: 0, right: 0
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
            position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
            backgroundColor: "rgba(0,0,0,0.5)"

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

export { Comp_Airtime, FormAirtime }
