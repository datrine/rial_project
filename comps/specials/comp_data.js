import Link from 'next/link';
import Head from 'next/head'
import { Comp_Header } from './comp_header';
import { SubHeader } from './comp_sub_header';
import { buyData, fetchDataPlans } from "../../utils/data"
import { checkUserDetails } from "../../utils/userAcc"
import { useEffect, useState } from 'react';
import { session, useSession } from 'next-auth/client';
import { fetchError, phoneValidator } from '../../utils/validators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { airtel_dataObj, etisalat_dataObj, glo_dataObj, mtn_corperate_dataObj, mtn_smedataObj, mtn_sme_copyObj } from '../../utils/data_palaver/plans';

let Comp_Data = () => {
    let [rialAccDetails, changeRialAccDetails] = useState({})
    let [session, loading] = useSession()
    let [resType, changeResType] = useState("none")
    let [resInfo, changeResInfo] = useState({})
    let onSuccess = (res) => {
        alert("Recharge successful")
        changeResType("success")
        changeResInfo(res)
    }
    let onFailure = (err) => {
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
        switch (resType) {
            case "success":
                view = <SuccessfulRecharge resInfo={resInfo} hookChangeResType={changeResType} />
                break;
            case "failure":
                view = <FailedRecharge resInfo={resInfo} hookChangeResType={changeResType} />
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

                                            <FormInternetData
                                                onSuccess={onSuccess} onFailure={onFailure}
                                                user={session.user} />
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
                <section className="p-3 mt-4" style={{ backgroundColor: "#e3e3e3" }}>
                    <div className="container">
                        <p>copyright 2020 &copy;. All right reserved.</p>
                    </div>
                </section>
            </section>
            {/*<!-- A2C Calculator-->*/}
            {view}
            <script src="/assets/js/a2ccalculator.js"></script>
        </>;
    }

    return <>
    </>
}

function FormInternetData({ user, onSuccess = () => { }, onFailure = () => { } }) {
    let [dataPlansState, changeDataPlansState] = useState([
        { displayName: "Select data plan", value: "", price: "" }
    ]);
    let [planState, changePlanState] = useState({
        displayName: "", value: "", price: ""
    });
    let [phoneNumState, changePhoneNumState] = useState("")
    let [dataServiceState, changeDataServiceState] = useState("")
    let [changedState, changeChangedState] = useState(0)


    let [validState, changeValidState] = useState(false)
    let [errorListState, changeErrorListState] = useState([])
    let [isValidatingPhoneNumState, changeIsValidatingPhoneNumState] = useState(false)
    let phoneNumValidObj = fetchError({ errorList: errorListState, prop: "phoneNum" });
    let operatorValidObj = fetchError({ errorList: errorListState, prop: "operator" })
    let [canSubmit, toggleCanSubmit] = useState(validState)
    let [isSubmittingState, changeIsSubmittingState] = useState(false)
    useEffect(() => {
        let getOperator = (dataService) => {
            switch (dataService) {
                case "mtn_sme_copy":
                case "mtn_corperate_data":
                case "mtn_sme_mega":
                    return "mtn"
                case "Glo_data":
                    return "glo"
                case "Etisalat_data":
                    return "9mobile"
                case "Airtel_data_gd":
                    return "airtel"

                default:
                    return "mtn"
            }
        }
        let res = phoneValidator({ phoneNum: phoneNumState, operator: getOperator(dataServiceState) });
        let { valid, errorList, instance } = res
        changeValidState(valid)
        changeErrorListState(errorList)
    }, [changedState]);

    useEffect(() => {
        let dataPlans = [
            { displayName: "Select data plan", value: "", price: "" }]
        if (dataServiceState === "mtn_sme_copy") {
            dataPlans.push(...mtn_sme_copyObj.plans.sort(
                (a, b) => Number(a.price) > Number(b.price)));
            changeDataPlansState(dataPlans)
        }

        else if (dataServiceState === "mtn_corperate_data") {
            dataPlans.push(...mtn_corperate_dataObj.plans.sort(
                (a, b) => Number(a.price) > Number(b.price)));
            changeDataPlansState(dataPlans)
        }

        else if (dataServiceState === "mtn_sme_mega") {
            dataPlans.push(...mtn_smedataObj.plans.sort(
                (a, b) => Number(a.price) > Number(b.price)));
            changeDataPlansState(dataPlans)
        }

        else if (dataServiceState === "Glo_data") {
            dataPlans.push(...glo_dataObj.plans);
            changeDataPlansState(dataPlans)
        }

        else if (dataServiceState === "Etisalat_data") {
            dataPlans.push(...etisalat_dataObj.plans);
            changeDataPlansState(dataPlans)
        }

        else if (dataServiceState === "Airtel_data_gd") {
            dataPlans.push(...airtel_dataObj.plans);
            changeDataPlansState(dataPlans)
        }
    }, [dataServiceState])

    return <>
        <form className="form-group " className="" onSubmit={
            async e => {
                try {
                    e.preventDefault();
                    let planObj = dataPlansState.find(item => item.value === planState)
                    let res = await fetch("/api/pay/data", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            serviceID: dataServiceState,
                            phone: phoneNumState,
                            plan: planObj.value,
                            email: user.email,
                            amount: planObj.price
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
                <select value={dataServiceState}
                    onChange={
                        async e => {
                            changeDataServiceState(e.target.value)
                            changeChangedState(changedState + 1)
                            // let dataplans = await getDataPlans({ operator: e.target.value });
                            // changeDataPlansState(dataplans)
                            //changePlanIdState("")
                        }
                    } className="form-control w-100" suppressHydrationWarning>
                    <option value="">Select...</option>
                    <option value="mtn_sme_copy">MTN Direct Data</option>
                    <option value="mtn_corperate_data">MTN CORPORATE GIFTING Data</option>
                    <option value="mtn_sme_mega">MTN SME Data</option>
                    <option value="Glo_data">GLO Data</option>
                    <option value="Etisalat_data">9mobile Data</option>
                    <option value="Airtel_data_gd">AIRTEL Data</option>
                </select> : null}
            {operatorValidObj?.msg}
            <br />
            <select value={planState} className="form-control w-100" type="text" onChange={
                e => {
                    changePlanState(e.target.value)
                }
            } placeholder="Airtime amount">
                {dataPlansState.map(({ value, displayName, price }, index) =>
                    <option key={index} value={value}>
                        {displayName} 	(₦{price})
                    </option>)}
            </select>
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


            <button name="submit" style={{
                color: "#fff",
                fontFamily: "'Courier New', Courier, monospace", fontFamily: 600
            }}
                className="btn card-btn1">Submit</button>
            <br />
            <button type="submit" name="buy" disabled={!validState} className="p-3  btt">Buy now</button>
        </form>

    </>
}

function calculateAirtime(airtime) {
    let money;
    money = Math.floor(airtime * 0.8);
    return money;
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
                {resInfo}
            </div>
        </div></>
}

async function getDataPlans({ operator = "" }) {
    console.log(operator)
    let mtnPlans = [
        { plan_id: "MTN500MB", product_code: "MTN500MB", label: "MTN 500MB Data", operator: "MTN", price: 175 },
        { plan_id: "MTN1GB", product_code: "MTN1GB", label: "MTN 1GB Data", operator: "MTN", price: 295 },
        { plan_id: "MTN2GB", product_code: "MTN2GB", label: "MTN 2GB Data", operator: "MTN", price: 590 },
        { plan_id: "MTN3GB", product_code: "MTN3GB", label: "MTN 3GB Data", operator: "MTN", price: 885 },
        { plan_id: "MTN4GB", product_code: "MTN4GB", label: "MTN 4GB Data", operator: "MTN", price: 1180 },
        { plan_id: "MTN5GB", product_code: "MTN5GB", label: "MTN 5GB Data", operator: "MTN", price: 1475 },
        { plan_id: "MTN8GB", product_code: "MTN8GB", label: "MTN 8GB Data", operator: "MTN", price: 2360 },
        { plan_id: "MTN10GB", product_code: "MTN10GB", label: "MTN 10GB Data", operator: "MTN", price: 2950 },
        { plan_id: "MTN15GB", product_code: "MTN15GB", label: "MTN 15GB Data", operator: "MTN", price: 4425 },
        { plan_id: "MTN20GB", product_code: "MTN20GB", label: "MTN 20GB Data", operator: "MTN", price: 5900 },
    ]
    let gloPlans = [
        { plan_id: "GLO1GB", product_code: "GLO1GB", label: "GLO 1GB Data", operator: "GLO", price: 450 },
        { plan_id: "GLO2GB", product_code: "GLO2GB", label: "GLO 2GB Data", operator: "GLO", price: 900 },
        { plan_id: "GLO4GB", product_code: "GLO4GB", label: "GLO 4.1GB Data", operator: "GLO", price: 1350 },
        { plan_id: "GLO5GB", product_code: "GLO5GB", label: "GLO 5.8GB Data", operator: "GLO", price: 1800 },
        { plan_id: "GLO7GB", product_code: "GLO7GB", label: "GLO 7.7GB Data", operator: "GLO", price: 2250 },
        { plan_id: "GLO10GB", product_code: "GLO10GB", label: "GLO 10GB Data", operator: "GLO", price: 2800 },
        { plan_id: "GLO13GB", product_code: "GLO13GB", label: "GLO 13.25GB Data", operator: "GLO", price: 3600 },
        { plan_id: "GLO18GB", product_code: "GLO18GB", label: "GLO 18.25GB Data", operator: "GLO", price: 4500 },
        { plan_id: "GLO29GB", product_code: "GLO29GB", label: "GLO 29.5GB Data", operator: "GLO", price: 7200 },
        { plan_id: "GLO50GB", product_code: "GLO50GB", label: "GLO 50GB Data", operator: "GLO", price: 9000 },
    ]
    let airtelPlans = [
        { plan_id: "AIRTEL750MB", product_code: "AIRTEL750MB", label: "Airtel 750MB	 Data", operator: "Airtel", price: 475 },
        { plan_id: "AIRTEL1GB", product_code: "AIRTEL1GB", label: "Airtel 1.5GB Data", operator: "Airtel", price: 940 },
        { plan_id: "AIRTEL2GB", product_code: "AIRTEL2GB", label: "Airtel 2GB Data", operator: "Airtel", price: 1150 },
        { plan_id: "AIRTEL3GB", product_code: "AIRTEL3GB", label: "Airtel 3GB Data", operator: "Airtel", price: 1325 },
        { plan_id: "AIRTEL4GB", product_code: "AIRTEL4GB", label: "Airtel 4.5GB Data", operator: "Airtel", price: 1900 },
        { plan_id: "AIRTEL6GB", product_code: "AIRTEL6GB", label: "Airtel 6GB Data", operator: "Airtel", price: 2400 },
        { plan_id: "AIRTEL8GB", product_code: "AIRTEL8GB", label: "Airtel 8GB Data", operator: "Airtel", price: 2850 },
        { plan_id: "AIRTEL11GB", product_code: "AIRTEL11GB", label: "Airtel 11GB Data", operator: "Airtel", price: 3600 },
        { plan_id: "AIRTEL15GB", product_code: "AIRTEL15GB", label: "Airtel 15GB Data", operator: "Airtel", price: 4800 },
        { plan_id: "AIRTEL40GB", product_code: "AIRTEL40GB", label: "Airtel 40GB Data", operator: "Airtel", price: 9500 },
        { plan_id: "AIRTEL75GB", product_code: "AIRTEL75GB", label: "Airtel 75GB Data", operator: "Airtel", price: 14250 },
        { plan_id: "AIRTEL110GB", product_code: "AIRTEL110GB", label: "Airtel 110GB Data", operator: "Airtel", price: 19000 },
    ]
    let etisalatPlans = [
        { plan_id: "MOB500MB", product_code: "MOB500MB", label: "9mobile 500MB Data", operator: "9mobile", price: 400 },
        { plan_id: "MOB1GB", product_code: "MOB1GB", label: "9mobile 1.5GB	 Data", operator: "9mobile", price: 800 },
        { plan_id: "MOB2GB", product_code: "MOB2GB", label: "9mobile 2GB Data", operator: "9mobile", price: 1020 },
        { plan_id: "MOB3GB", product_code: "MOB3GB", label: "9mobile 3GB Data", operator: "9mobile", price: 1275 },
        { plan_id: "MOB4GB", product_code: "MOB4GB", label: "9mobile 4.5GB Data", operator: "9mobile", price: 1700 },
        { plan_id: "MOB11GB", product_code: "MOB11GB", label: "9mobile 11GB Data", operator: "9mobile", price: 3200 },
        { plan_id: "MOB15GB", product_code: "MOB15GB", label: "9mobile 15GB Data", operator: "9mobile", price: 4000 },
        { plan_id: "MOB40GB", product_code: "MOB40GB", label: "9mobile 40GB Data", operator: "9mobile", price: 8000 },
        { plan_id: "MOB75GB", product_code: "MOB75GB", label: "9mobile 75GB Data", operator: "9mobile", price: 12000 },
    ]
    let dataPlans = []
    switch (operator) {
        case "MTN":
            dataPlans = mtnPlans;
            break;
        case "GLO":
            dataPlans = gloPlans;
            break;
        case "Airtel":
            dataPlans = airtelPlans;
            break;
        case "9mobile":
            dataPlans = etisalatPlans;
            break;

        default:
            break;
    }
    console.log(dataPlans)
    return dataPlans
}

export { Comp_Data, FormInternetData }
