import Link from 'next/link';
import Head from 'next/head'
import { Comp_Header } from './comp_header';
import { SubHeader } from './comp_sub_header';

let Comp_Airtime = () => {
    return <>
        <section >
            <Comp_Header isLoggedIn={true} />
            <SubHeader />
            <section className=" ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 shadow-lg">
                            <div className="card bg-light  mt-2">
                                <div className="card-body  shadow p-4  ">
                                    <div className="card-bottom">
                                        <h4 style={{ fontSize: "25px", paddingBottom: "10px" }}>A2C Calculator</h4>
                                        <form className="form-group " className="" action="">
                                            <select name="select" className="form-control w-100" required>
                                                <option value="">Select...</option>
                                                <option value="MTN TRANSFER">MTN TRANSFER</option>
                                                <option value="AIRTIME TRANSFER">AIRTIME TRANSFER</option>
                                                <option value="GLO TRANSFER">GLO TRANSFER</option>
                                                <option value="9MOBILE TRANSFER">9MOBILE TRANSFER</option>
                                                <option value="MTN VTU">MTN VTU</option>
                                                <option value="AIRTEL ERC">AIRTEL ERC</option>
                                                <option value="9MOBILE VTU">9MOBILE VTU</option>
                                                <option value="GLO E-TOP UP">GLO E-TOP UP</option>
                                            </select>
                                            <br />
                                            <br />
                                            <input className="form-control" type="text" style={{ padding: "25px 10px 25px 10px" }} name="" id="airtime" onkeyup="calculate()" placeholder="Airtime amount" /><br />

                                            <input className="form-control" type="text" style={{ padding: "25px 10px 25px 10px" }} name="" id="money" placeholder="You will recieve N0" readonly /><br />
                                            <br />
                                            <a name="submit" style={{ color: "#fff", fontFamily: "'Courier New', Courier, monospace", fontFamily: 600 }} className="btn card-btn1">Submit</a>
                                            <br />

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">

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
        <script src="/assets/js/a2ccalculator.js"></script>
    </>
}

function calculate(){
    let airtime = document.getElementById('airtime').value;
    let money;
    money = airtime * 0.8;
    document.getElementById('money').value = "N" + Math.floor(money);
}


export { Comp_Airtime }
