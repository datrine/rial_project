import { useState } from "react";
import { Comp_Header } from "./comp_header";
import { FormAirtime } from "./comp_airtime";
import { SubHeader } from "./comp_sub_header";
import { FormInternetData } from "./comp_data";
import { session } from "next-auth/client";
import { Comp_CableTV, FormCableTV } from "./comp_cable";
//component for the mobile menu
function Comp_TopUp({ isLoggedIn = true, user }) {
    return <>
        <Comp_Header />
        <section className="body1">
            <SubHeader />
            {/*<!-- The Modal airtime-->*/}
            <AirtimeModal user={user} />
            {/*<!-- The Modal cable tv-->*/}
            <CableTvModal user={user} />
            {/*<!-- The Modal data -->*/}
            <DataModal user={user} />
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
                        <DataDiv />
                    </div>
                    <div className="col-md-4">
                        <CableDiv />
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
                <button disabled className="bttn p-3 shadow-lg "
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
    let [viewType, changeViewType] = useState("airtime")
    let [viewToResult, changeViewToResult] = useState(null)
    let onSuccess = (res) => {
        changeViewType("success");
        viewToResult = <>
            <h3>{res}</h3>
        </>
        changeViewToResult(viewToResult)
    }
    let onFailure = ({ err, message }) => {
        console.log(err)
        viewToResult = <>
            <h3>{err}</h3>
            <p>{message}</p>
        </>
        changeViewToResult(viewToResult)
        changeViewType("failure");
    }
    switch (viewType) {
        case "success":
            view = <SuccessfulTransaction changeView={changeViewType} />
            break;
        case "failure":
            view = <FailedTransaction view={viewToResult} changeView={changeViewType} />
            break;
        case "airtime":
            view =
                <FormAirtime user={user} onFailure={onFailure} onSuccess={onSuccess} />
            break;
        default:
            view =
                <FormAirtime user={user} onFailure={onFailure} onSuccess={onSuccess} />
            break;
    }
    return <>
        <div className="modal" id="buyairtime" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>AIRTIME</h4>
                        <button onClick={e => {
                            changeViewType("airtime")
                        }} type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        {view}
                    </div>
                    <div className="modal-footer">
                        <button onClick={e => {
                            changeViewType("airtime")
                        }} type="button" className="btt p-3" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function CableTvModal({ user }) {
    let view = null;
    let [viewType, changeViewType] = useState("airtime")
    let [viewToResult, changeViewToResult] = useState(null)
    let onSuccess = (res) => {
        changeViewType("success");
        viewToResult = <>
            <h3>{res}</h3>
        </>
        changeViewToResult(viewToResult)
    }
    let onFailure = ({ err, message }) => {
        console.log(err)
        viewToResult = <>
            <h3>{err}</h3>
            <p>{message}</p>
        </>
        changeViewToResult(viewToResult)
        changeViewType("failure");
    }
    switch (viewType) {
        case "success":
            view = <SuccessfulTransaction changeView={changeViewType} />
            break;
        case "failure":
            view = <FailedTransaction view={viewToResult} changeView={changeViewType} />
            break;
        case "airtime":
            view = <FormCableTV user={user} onFailure={onFailure} onSuccess={onSuccess} />
            break;
        default:
            view = <FormCableTV user={user} onFailure={onFailure} onSuccess={onSuccess} />
            break;
    }
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
                        {view}
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

function DataModal({ user }) {
    let view = null;
    let [viewType, changeViewType] = useState("data")
    let [viewToResult, changeViewToResult] = useState(null)
    let onSuccess = (res) => {
        changeViewType("success");
        viewToResult = <>
            <h3>{res}</h3>
        </>
        changeViewToResult(viewToResult)
    }
    let onFailure = ({ err, message }) => {
        console.log(err)
        viewToResult = <>
            <h3>{err}</h3>
            <p>{message}</p>
        </>
        changeViewToResult(viewToResult)
        changeViewType("failure");
    }
    switch (viewType) {
        case "success":
            view = <SuccessfulTransaction changeView={changeViewType} />
            break;
        case "failure":
            view = <FailedTransaction view={viewToResult} changeView={changeViewType} />
            break;
        case "airtime":
            view =
                <FormInternetData user={user} onFailure={onFailure} onSuccess={onSuccess} />
            break;
        default:
            view =
                <FormInternetData user={user} onFailure={onFailure} onSuccess={onSuccess} />
            break;
    }
    return <>
        <div className="modal" id="datatopup">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/*<!-- Modal Header -->*/}
                    <div className="modal-header">
                        <h4 className="modal-title" style={{ fontSize: "25px", paddingBottom: "10px" }}>Data Topup</h4>
                        <button onClick={e => {
                            changeViewType("data")
                        }} type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/*<!-- Modal body -->*/}
                    <div className="modal-body">
                        {view}
                    </div>
                    {/*<!-- Modal footer -->*/}
                    <div className="modal-footer">
                        <button onClick={e => {
                            changeViewType("data")
                        }} type="button" className="btt p-3" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function SuccessfulTransaction({ view }) {
    return <>
        <form className="form-group ">
            {view}
        </form></>
}

function FailedTransaction({ view, changeView }) {
    console.log("Failed...")
    return <>
        <form className="form-group ">
            {view}
        </form>
    </>
}

export { Comp_TopUp }