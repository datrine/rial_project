import { useState, useEffect } from "react";
import Link from "next/link"
import { usePaystackPayment } from 'react-paystack';
import { v3, v4 } from "uuid"
import { sendMail } from "../../utils/email"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

let PaymentApps = (propsFromParent = {
    successHandler: async () => { },
    cancelHandler: async () => { },
    failureHandler: async () => { }, customerObjProps: {
        email: "",
        lastname: "",
        firstname: "",
        amount: 0.0
    }
}) => {
    let [paymentState, changePaymentState] = useState("prepay") //prepay||pay_success||pay_fail
    let prePay = <div className="container-fluid" style={{
        position: "fixed", top: 0, bottom: 0, left: 0, right: 0, display: "flex",
        justifyContent: "center", alignItems: "center", alignContent:"space-around",
        backgroundColor: "rgba(0,0,0,0.5)",
        flexDirection: "column", zIndex: 1000
    }}>
        <p style={{
            position: "absolute", top: 0, left: 0, right: 0, textAlign: "right",
            backgroundColor: "transparent",width:"100%"
        }}><button onClick={
            e => {
                changePaymentState("pay_cancel")
            }
        }><FontAwesomeIcon icon={faTimes} /></button></p>
        <CartQuickSummary {...propsFromParent} />
        {/* <FlutterWave {...propsFromParent} />*/}
        <Paystack hookChangePaymentState={changePaymentState}  {...propsFromParent} />
    </div>;
    let paidSuccessfulView = <PaymentSuccess {...propsFromParent} />
    let paidFailView = <PaymentFail {...propsFromParent} />
    let view = null;
    useEffect(() => {
        if (paymentState !== "prepay") {
            (async () => {
                if (paymentState === "pay_success") {
                    await propsFromParent.successHandler()
                }
                else if ("pay_fail") {
                    await propsFromParent.failureHandler()
                }
                else if ("pay_cancel") {
                    await propsFromParent.cancelHandler()
                }
            })()
        }
    }, [paymentState])
    switch (paymentState) {
        case "prepay":
            view = prePay;
            break;
        default:
            break;
    }
    return <>
        {paymentState === "prepay" ? view : null}
    </>
}

let CartQuickSummary = ({ cartObjProps, customerObjProps }) => {
    return <>
        <div className="container-fluid" style={{
            backgroundColor: "white",
            width: "300px", height: 50, paddingTop: 10, marginBottom: "10"
        }}>
            <h4 style={{ color: "Green", textAlign: "center" }}>
                Amount to top up: {customerObjProps.amount}</h4>
        </div>
    </>
}

let Paystack = ({ customerObjProps, hookChangePaymentState, ...propsFromParent }) => {
    let reference = v4();
    const initializePayment = usePaystackPayment({
        reference,
        email: customerObjProps.email,
        amount: customerObjProps.amount,
        firstname: customerObjProps.fname,
        lastname: customerObjProps.lname,
        //quantity: cartObjProps.totalQty,
        publicKey: 'pk_test_7cef28e87845e0bb56c5c709d5a3cf9aae065714',
    });
    // you can call this function anything
    const onSuccess = (reference) => {
        hookChangePaymentState("pay_success")
        //hookChangePaymentState("pay_fail")
    };

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
        hookChangePaymentState("pay_fail")
    }
    return (
        <div>
            <button className="w3-btn w3-cyan w3-text-white" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay via Paystack</button>
        </div>
    );
}

let FlutterWave = ({ customerObjProps, ...propsFromParent }) => {
    let { email, lname, fname, telephone1 } = customerObjProps
    return <> <button className="w3-btn w3-blue" type="button" onClick={e => {
        makeFlutterWavePayment({
            customer: {
                email,
                phone_number: telephone1,
                name: lname + " " + fname
            }
        })
    }}>Pay Via Flutterwave Now</button>
    </>
}

function makeFlutterWavePayment({ customer = { email: "", phone_number: "", name: "" } }) {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
        tx_ref: "hooli-tx-1920bbtyt",
        amount: 54600,
        currency: "NGN",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: // specified redirect URL
            "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer,
        callback: function (data) {
            console.log(data);
        },
        onclose: function () {
            // close modal
        },
        customizations: {
            title: "My store",
            description: "Payment for items in cart",
            logo: "https://assets.piedpiper.com/logo.png",
        },
    });
}

let PaymentSuccess = ({ successHandler = async () => { }, hookChangeTempCartState, cartObjProps, customerObjProps }) => {
    useEffect(() => {
        (async () => {
            await successHandler();
            let res = await sendMail({
                to: customerObjProps.email,
                from: "stynzshoes@styleznshoes.com.ng", text: "", port: 587,
                host: "email-smtp.us-east-2.amazonaws.com",
                pass: "BLOa2Dl6zt183crN9pVFVLioY3/5OTeo0TpFLthq7Plv",
                user: "AKIASWN6B2XU4W3XQIFW"
            })
            console.log(res)
        })()
    }, [])
    return <><div>
        <p style={{ textAlign: "center" }}>Payment was successful.</p>
        <Link href="/listings/all_cat"><a className="w3-btn w3-text-white w3-green">Purchase more items</a></Link>
    </div>
    </>
}

let PaymentFail = ({ hookChangePaymentState, cartObjProps }) => {
    return <><div>
        <p>Payment was not successful.</p>
        <Link href="/"><a className="w3-btn w3-text-white w3-red">Retry</a></Link>
    </div>
    </>
}

export { PaymentApps }