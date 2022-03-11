import Link from 'next/link';
import { Comp_Header } from './comp_header';
import { Comp_Auth } from './comp_auth';
import { SubHeader } from './comp_sub_header';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PaymentApps } from "./payment"
import { LogoBar, ProfileBar } from './reusables';

let Comp_Wallet = ({ user }) => {
    let [session, loading] = useSession()
    let user=session.user;
    let [showPaymentView, changeShowPaymentView] = useState(false)
    let [walletState, changeWalletState] = useState({})
    let [topUpAMTState, changeTopUpAMTState] = useState(100)
    let [isProcessing, changeIsProcessing] = useState(false)

    let successHandler = async () => {
        try {
            
        let res = await fetch(`/api/${user.username}/wallet/add`, {
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
        } catch (error) {
            console.log(error)
        }
    }

    let cancelHandler = async () => {
        changeIsProcessing(false)
    }

    let failureHandler = async () => {
        changeIsProcessing(false)
    }

    useEffect(async () => {
        if (user) {
            let res = await fetch(`/api/${user.username}/wallet/total/`, {
                method: "GET",
            })
            let { wallet, err } = await res.json();
            if (wallet) {
                console.log(wallet)
                changeWalletState(wallet)
            }
        }
    }, [user, showPaymentView])

    if (user) {
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
                                        {walletState.balance ?
                                            <form className="form-group" onSubmit={
                                                async e => {
                                                    try {
                                                        e.preventDefault()
                                                        changeIsProcessing(true)
                                                        //changeShowPaymentView(true)
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
                                                <button type="submit" name="pay" data-toggle="modal" data-target="#paymentModal"
                                                    style={{ color: "#fff", fontFamily: 600 }} className="btn card-btn1 w3-cyan">
                                                    {isProcessing ? <FontAwesomeIcon icon={faSpinner} spin /> : "Top up"}
                                                </button>
                                            </form> : null}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/*<!-- A2C Calculator-->*/}
            <script src="/assets/js/a2ccalculator.js"></script>
            <PaymentApps failureHandler={failureHandler}
                successHandler={successHandler} cancelHandler={cancelHandler} customerObjProps={
                    {
                        email: user.email,
                        amount: topUpAMTState,
                        lastname: user.lastname,
                        firstname: user.firstname
                    }
                } />
        </>
    }
    return <>
        <p>Loading wallet...</p>
    </>
}

export { Comp_Wallet }
