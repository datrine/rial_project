import { useState } from "react";
import Link from "next/link"
import Head from "next/head"
import { Comp_Header } from "./comp_header";
import { FormAirtime } from "./comp_airtime";
import { SubHeader } from "./comp_sub_header";
import { buyAirtime } from "../../utils/cable_tv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { PaymentApps } from "./payment"
import { FormInternetData } from "./comp_data";
//component for the mobile menu
function Comp_TopUp({ isLoggedIn = true, user }) {
    return <>
        <Comp_Header />
        <section className="body1">
            <SubHeader />
            {/*<!-- The Modal airtime-->*/}
            <AirtimeModal user={user} />
            {/*<!-- The Modal cable tv-->*/}
            <CableTvModal />
            {/*<!-- The Modal data -->*/}
            <DataModal />
            <div className="clearfix container">
                <p className="float-right"><span><a href="/" className="bttn p-3">Home</a></span></p>
                <p className="float-left text1 ">Topup</p>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 " >
                        <AirtimeDiv />
                    </div>
                    <div className="col-md-4">
                        <CableDiv />
                    </div>
                    <div className="col-md-4">
                        <DataDiv />
                    </div>
                </div>
            </div>
        </section>
        <br />
        <section className="p-3 mt-4" style={{ backgroundColor: "#e3e3e3" }}>
            <div className="container">
                <p>copyright 2020 &copy;. All right reserved.</p>
            </div>
        </section>
    </>;
}

function AirtimeDiv(params) {
    return <>
        <div className="card bg-light  mt-2">
            <div className="card-top  shadow p-4 float-center ">
                <h4>BUY AIRTIME</h4>
            </div>
            <div className="card-body  shadow p-4  ">
                <div className=" row ">
                    <div className="col-xs-6 col-md-6 p-2">
                        <img src="/img/glo.png" alt="" style={{ width: "70px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/mtn.png" alt="" style={{ width: "70px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/air.png" alt="" style={{ width: "70px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/mob.png" alt="" style={{ width: "70px" }} />
                    </div>
                </div>
                <br />
                <button className="bttn p-3 shadow-lg " data-toggle="modal" data-target="#buyairtime">Buy Airtime</button>

            </div>
        </div>
    </>
}

function CableDiv({ }) {
    return <>
        <div className="card bg-light  mt-2">
            <div className="card-top  shadow p-4 float-center ">
                <h4>CABLE TV & Other Bills</h4>
            </div>
            <div className="card-body  shadow p-4  ">
                <div className=" row ">
                    <div className="col-xs-6 col-md-6 p-2">
                        <img src="/img/dst.png" alt="" style={{ width: "100px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="img/gotv.png" alt="" style={{ width: "100px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/phcn.png" alt="" style={{ width: "100px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/sar.png" alt="" style={{ width: "130px" }} />
                    </div>
                </div>
                <br />
                <button className="bttn p-3 shadow-lg "
                    data-toggle="modal" data-target="#cabletv">Buy Sub</button>
            </div>
        </div>
    </>
}

function DataDiv(params) {
    return <>
        <div className="card bg-light  mt-2">
            <div className="card-top  shadow p-4 float-center ">
                <h4>DATA TOPUP</h4>
            </div>
            <div className="card-body  shadow p-4  ">
                <div className=" row ">
                    <div className="col-xs-6 col-md-6 p-2">
                        <img src="/img/glo.png" alt="" style={{ width: "100px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/mtn.png" alt="" style={{ width: "100px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="/img/air.png" alt="" style={{ width: "100px" }} />
                    </div>
                    <div className="col-xs-6  col-md-6 p-2">
                        <img src="img/mob.png" alt="" style={{ width: "100px" }} />
                    </div>
                </div>
                <br />
                <button className="bttn p-3 shadow-lg " data-toggle="modal" data-target="#datatopup">Top Up Data</button>

            </div>
        </div>
    </>
}

function AirtimeModal({ user }) {
    let view = null;
    let [viewType, changeViewType] = useState("purchase")
    let viewToResult = null
    let onSuccess = (res) => {
        changeViewType("success");
        viewToResult = <>
            <h3>{res}</h3>
        </>
    }
    let onFailure = ({ err, message }) => {
        changeViewType("failure");
        viewToResult = <>
            <h3>{err}</h3>
            <p>{message}</p>
        </>
    }
    switch (viewType) {
        case "success":
            <SuccessfulTransaction />
            break;
        case "failure":
            <FailedTransaction view={viewToResult} />
            break;
        default:
            view = <>
                <div className="modal" id="buyairtime" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>AIRTIME</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <FormAirtime onFailure={onFailure} onSuccess={onSuccess} /></div>
                            <div className="modal-footer">
                                <button type="button" className="btt p-3" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            break;
    }
    return <>{view}</>
}

function CableTvModal({ }) {
    return <>
        <div className="modal" id="cabletv">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/*<!-- Modal Header -->*/}
                    <div className="modal-header">

                        <h4 className="modal-title"
                            style={{ fontSize: "25px", paddingBottom: "10px" }}>Cable & Other Bills Topup</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/*<!-- Modal body -->*/}
                    <div className="modal-body">
                        <form className="form-group " action="">
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
                    </div>
                    { /* <!-- Modal footer -->*/}
                    <div className="modal-footer">
                        <button type="button" className="btt p-3" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function DataModal(params) {
    return <>
        <div className="modal" id="datatopup">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/*<!-- Modal Header -->*/}
                    <div className="modal-header">
                        <h4 className="modal-title" style={{ fontSize: "25px", paddingBottom: "10px" }}>Data Topup</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/*<!-- Modal body -->*/}
                    <div className="modal-body">
                        <FormInternetData/></div>
                    {/*<!-- Modal footer -->*/}
                    <div className="modal-footer">
                        <button type="button" className="btt p-3" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function SuccessfulTransaction({ view }) {
    return <>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            position: "absolute", backgroundColor: "transparent",
            top: 0, bottom: 0, left: 0, right: 0
        }}>
            <p style={{textAlign: "right"
            }}><FontAwesomeIcon icon={faTimes} /></p>
            {view}
        </div></>
}

function FailedTransaction({ view }) {
    return <>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            position: "absolute", backgroundColor: "transparent", top: 0, bottom: 0, left: 0, right: 0
        }}>
            <p style={{
                position: "absolute",
                top: 0, bottom: 0, left: 0, right: 0, textAlign: "right"
            }}><FontAwesomeIcon icon={faTimes} /></p>
            {view}
            <p>Failed...</p>
        </div></>
}

export { Comp_TopUp }