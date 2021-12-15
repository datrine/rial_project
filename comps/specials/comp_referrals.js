import Link from 'next/link';
import { Comp_Header } from './comp_header';
import { Comp_Auth } from './comp_auth';
import { SubHeader } from './comp_sub_header';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PaymentApps } from "./payment"

let Comp_Referrals = ({user }) => {
    let [referralsState, changeReferralsState] = useState([])
    let [isProcessing, changeIsProcessing] = useState(false)

    useEffect(async () => {
        (async () => {
            if (user) {
                changeIsProcessing(true)
                let url =
                    `/api/${user.usename}/referrals?username=${user.username}`
                let res = await fetch(`${url}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    //body: JSON.stringify({ amt: topUpAMTState })
                })
                let data = await res.json();
                changeReferralsState(data)
                changeIsProcessing(false)
            }
        })()
    }, [user])

    if (user) {
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
                                {isProcessing ? <FontAwesomeIcon icon={faSpinner} spin /> :
                                    (referralsState.length > 0 ? referralsState.map((referred, index) => <p key={index}>
                                        <span>{referred.username}</span>
                                    </p>) : <p>No referrals...</p>)}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    }
    return <>
        <p>Loading wallet...</p>
    </>
}

export { Comp_Referrals }
