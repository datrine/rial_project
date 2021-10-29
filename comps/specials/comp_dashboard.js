import { useState } from "react";
import { Comp_Header } from "./comp_header"
import { SubHeader } from "./comp_sub_header";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { PaymentApps } from "./payment"
//component for the mobile menu
function Comp_Dashboard({ isLoggedIn = true }) {
    let [session, loading] = useSession()
    let view = null
    if (session) {
        view = <Substance user={session.user} />;
        return <>
            <Comp_Header />
            <br />
            <SubHeader />
            {view}
        </>;
    }
    return <>
        <Comp_Header />
        <br />
        <SubHeader />
    </>;
}

function Substance({ user = { email: "" } }) {
    let [totalTransaction, changeTotalTransaction] = useState(0)
    return <>
        <section style={{ marginTop: "220" }}>
            <section className="body1">
                <div className="clearfix container">
                    <p className="float-right"><span><a href="/" className="bttn p-3">Home</a></span></p>
                    <p className="float-left text1 ">DASHBOARD</p>
                </div><br />
                <div className="container">

                    <a href="/topup" className="bttn p-3">Top Up Data</a>
                    <a href="/wallet" className="p-3 bttn1">Fund Wallet</a>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 " >

                            <div className="card bg-light  mt-2">
                                <WalletSummary customerEmail={user.email} />  </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card bg-light  mt-2">
                                <div className="card-body  shadow p-4  ">
                                    <p className="card-text float-left">
                                        <b style={{ color: "#4621ad" }}>Total Transactions</b>
                                        <br /> <span>₦ {totalTransaction} </span></p>
                                    <i className='fa fas-line-chart float-right' style={{ fontSize: "25px", color: "#4621ad" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="py-4 mb-5 container ">
                <div className="clearfix">
                    <Transaction customerEmail={user.email}
                        hookChangeTotalTransaction={changeTotalTransaction} />
                </div>
            </section>
            <section className="p-3 mt-4" style={{ backgroundColor: "#e3e3e3" }}>
                <div className="container">
                    <p>copyright 2020 &copy;. All right reserved.</p>
                </div>
            </section>
        </section>

    </>
}

let WalletSummary = ({ customerEmail }) => {
    let [walletState, changeWalletState] = useState({})
    let [walletResponseTypeState, changeWalletResponseTypeState] = useState("loading");
    useEffect(() => {
        (async () => {
            console.log(`/api/${customerEmail}/wallet/total`)
            let res = await fetch(`/api/${customerEmail}/wallet/total`, {
                method: "GET",
            })
            let { wallet, err } = await res.json()
            console.log(wallet)
            if (err) {
                changeWalletResponseTypeState("error")
            }
            if (wallet) {
                changeWalletResponseTypeState("transaction")
                changeWalletState(wallet)
            }
        })();
    }, [])
    let viewWallet = null
    switch (walletResponseTypeState) {
        case "loading":
            viewWallet = <><p style={{ textAlign: "center" }}><FontAwesomeIcon icon={faSpinner} spin /></p></>
            break;

        case "error":
            viewWallet = <><p>Error: Network error</p></>
            break;
        case "transaction":
            viewWallet = <><div className="card-body  shadow p-4 ">
                <p className="card-text float-left">
                    <b style={{ color: "#4621ad" }}>WALLET BALANCE</b>
                    <br /> <span>₦ {walletState.balance}</span></p>
                <i className='fas fa-wallet float-right' style={{ fontSize: "25px", color: "#4621ad" }}></i>
            </div></>
            break;

        default:
            break;
    }
    return <>
        {viewWallet}
    </>
}

let Transaction = ({ customerEmail, hookChangeTotalTransaction }) => {
    let [transactionsState, changeTransactionsState] =
        useState([{ id: "", ref_num: "", email: "", transact_date: "", amount: "" }])
    let [transactionResponseTypeState, changeTransactionResponseTypeState] =
        useState("loading")
    let screenWidth = typeof window !== "undefined" ? screen.width : undefined;
    let viewOfTransactionResponseType = null;

    let largeViewOfTransactions = <> <div className="float-left  p-3 shadow-lg"
        style={{ width: "100%", border: "1px solid #e3e3e3" }}>
        <p> <b style={{ color: "#4621ad" }}>Recent Transactions</b> </p>

        <table className="table table-hover" width="100%" style={{ textAlign: "center", border: "1px solid #eee " }}>
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Email</th>
                    <th>Amount (₦) </th>
                    <th>Date | time</th>
                </tr>
            </thead>
            <tbody>
                {transactionsState.map((transaction, index) => <tr key={index} >
                    <td>{transaction.id}</td>
                    <td>{transaction.email}</td>
                    <td>  {transaction.amount}</td>
                    <td>{transaction.transact_date}</td>
                </tr>)}

            </tbody>
        </table>
    </div>
    </>

    let smallviewOfTransactions = <> <div className="float-left  p-3 shadow-lg"
        style={{ width: "100%", border: "1px solid #e3e3e3" }}>
        <div>{
            transactionsState.map((transaction, index) => <div key={index} >
                <p>Transaction ID <b>{transaction.id}</b></p>
                <p>Email <b>{transaction.email}</b></p>
                <p>Amount <b>{transaction.amount}</b></p>
                <p>Date | time  <b>{transaction.transact_date}</b></p></div>
            )
        }
        </div>
        <p> <b style={{ color: "#4621ad" }}>Recent Transactions</b> </p>
    </div> </>

    switch (transactionResponseTypeState) {
        case "transaction":
            viewOfTransactionResponseType = <>
                {screenWidth > 700 ? largeViewOfTransactions : smallviewOfTransactions}</>
            break;
        case "error":
            viewOfTransactionResponseType = <>
                <div className="float-left  p-3 shadow-lg"
                    style={{ width: "100%", border: "1px solid #e3e3e3" }}>
                    <p>Error loading transactions</p>
                </div>  </>
            break;
        case "loading":
            viewOfTransactionResponseType = <>
                <div className="float-left  p-3 shadow-lg"
                    style={{ width: "100%", border: "1px solid #e3e3e3" }}>
                    <p style={{ textAlign: "center" }}>
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </p>
                </div>
            </>
            break;
        default:
            break;
    }

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/${customerEmail}/transactions/`, {
                method: "GET",
            })
            let { transactions, err } = await res.json()
            if (err) {
                changeTransactionResponseTypeState("error")
            }
            if (Array.isArray(transactions)) {
                changeTransactionResponseTypeState("transaction")
                let totalTransaction = transactions.reduce((prev, cur, index, trans) => {
                    return prev + cur.amount;
                }, 0)
                hookChangeTotalTransaction(totalTransaction)
                changeTransactionsState(transactions);
            }
        })();
    }, [])
    return <>
        {viewOfTransactionResponseType}
    </>
}

export { Comp_Dashboard }