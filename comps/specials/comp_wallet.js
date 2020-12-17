import Link from 'next/link';
import { Comp_Header } from './comp_header';
import { Comp_Auth } from './comp_auth';
import { SubHeader } from './comp_sub_header';

let Comp_Wallet = () => {
    return <>
        <Comp_Auth />
        <section style={{marginTop:"100"}}>
            <Comp_Header />
            <SubHeader/>
            <section className=" ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 shadow-lg">


                            <div className="card bg-light  mt-2">
                                <div className="card-body  shadow p-4  ">
                                    <div className="card-bottom">
                                        <br />
                                        <h4 className="p-2">Wallet Top-up<span>Amount</span></h4>
                                    </div>
                                    <div className="card-bottom">
                                        <form className="form-group" action="" method="POST">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basiaddon1">₦</span>
                                                </div>
                                                <input type="text" className="form-control" name="amount" placeholder="Amount" aria-label="Amount" aria-describedby="basiaddon1" />
                                            </div>
                                            <input type="submit" value="PAY" name="pay" style={{ color: "#fff", fontFamily: 600 }} className="btn card-btn1" />
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
    </>
}

export { Comp_Wallet }
