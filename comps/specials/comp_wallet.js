import Link from 'next/link';
import { Comp_Header } from './comp_header';
import { Comp_Auth } from './comp_auth';
import { SubHeader } from './comp_sub_header';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PaymentApps } from "./payment"

let Comp_Wallet = () => {
    let [session, loading] = useSession()
    let [showPaymentView, changeShowPaymentView] = useState(false)
    let [walletState, changeWalletState] = useState({})
    let [topUpAMTState, changeTopUpAMTState] = useState(100)
    let [isProcessing, changeIsProcessing] = useState(false)
    let user;
    console.log()
    let successHandler = async () => {
        let res = await fetch(`/api/${session.user.username}/wallet/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amt: topUpAMTState })
        })
        let data = await res.json();
        changeWalletState(data)
        changeTopUpAMTState(0)
        changeIsProcessing(false)
        changeShowPaymentView(false)
    }

    let cancelHandler = async () => {
        changeIsProcessing(false)
        changeShowPaymentView(false)
    }

    let failureHandler = async () => {
        changeIsProcessing(false)
        changeShowPaymentView(false)
    }

    useEffect(async () => {
        if (session) {
            user = session.user
            let res = await fetch(`/api/${user.username}/wallet/total/`, {
                method: "GET",
            })
            let { wallet, err } = await res.json();
            if (wallet) {
                console.log(wallet)
                changeWalletState(wallet)
            }
        }
    }, [session, showPaymentView])

    if (session) {
        user = session.user;
        return <>
            <Comp_Auth />
            <section>
                <Comp_Header />
                <SubHeader />
                <section className=" " style={{ marginTop: "50px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3">

                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 shadow-lg">
                                <div className="card bg-light  mt-2">
                                    <div className="card-body  shadow p-4  ">
                                        <div className="card-bottom">
                                            <br />
                                            <h4 className="p-2">Wallet Top-up<span> Amount</span></h4>
                                        </div>
                                        <div className="card-bottom">
                                            <form className="form-group" onSubmit={
                                                async e => {
                                                    try {
                                                        e.preventDefault()
                                                        changeIsProcessing(true)
                                                        changeShowPaymentView(true)
                                                    } catch (error) {

                                                    }
                                                }
                                            }>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basiaddon1">₦</span>
                                                    </div>
                                                    <input type="text" className="form-control" name="amount"
                                                        value={walletState.balance} readOnly={true} />
                                                </div>
                                                <p>Add Fund To Wallet</p>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basiaddon1">₦</span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Amount"
                                                        value={topUpAMTState} onChange={
                                                            e => {
                                                                changeTopUpAMTState(e.target.value)
                                                            }
                                                        } aria-describedby="basiaddon1" />
                                                </div>
                                                <button type="submit" name="pay"
                                                    style={{ color: "#fff", fontFamily: 600 }} className="btn card-btn1 w3-cyan">
                                                    {isProcessing ? <FontAwesomeIcon icon={faSpinner} spin /> : "Top up"}
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </section>
            {/*<!-- A2C Calculator-->*/}
            <script src="/assets/js/a2ccalculator.js"></script>
            {showPaymentView ? <PaymentApps failureHandler={failureHandler}
                successHandler={successHandler} cancelHandler={cancelHandler} customerObjProps={
                    {
                        email: user.userEmail,
                        amount: topUpAMTState,
                        lastname: user.userName,
                        firstname: user.userName
                    }
                } /> : null}
        </>
    }
    return <>
        <p>Loading wallet...</p>
    </>
}

export { Comp_Wallet }
