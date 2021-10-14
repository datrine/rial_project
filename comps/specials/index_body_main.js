import Link from "next/link"
let BodyMain = ({ }) => {
    return <main>

        {/*<!-- Slider Area Start-->*/}
        <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 col-md-9 ">
                                <div className="hero__caption">
                                    <h4 data-animation="fadeInUp" data-delay=".5s">Welcome To Riah Top-up</h4>
                                    <h1 data-animation="fadeInUp" data-delay=".6s">Your Affordable and Reliable<br />Topup Platform</h1>
                                    <p data-animation="fadeInUp" data-delay=".8s">Buy data plans at cheaper rates and your cable Tv subscription  at good rates.</p>
                                    {/*<!-- Slider btn -->*/}
                                    <div className="slider-btns">
                                        {/*<!-- Hero-btn -->*/}
                                        <Link href="/login" passHref><a data-animation="fadeInLeft" data-delay="1.0s"
                                            className="btn radius-btn">Get Started</a></Link>

                                        {/*<!-- Video Btn -->*/}

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                                    <img src="/assets/img/hero/hero_right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- Slider Area End -->
        <!-- Best Features Start -->
       
        <!-- Best Features End -->
        <!-- Services Area Start -->
    
        <!-- Services Area End -->
        <!-- Applic App Start -->*/}
        <div className="applic-apps section-padding2">
            <div className="container-fluid">
                <div className="row">
                    {/*<!-- slider Heading -->*/}
                    <div className="col-xl-4 col-lg-4 col-md-8">
                        <div className="single-cases-info mb-30">
                            <h3>OUR DATA PLANS </h3>
                            <p>Leverage on our cheap data offering for all networks and do more in every area of your life. Whether you are a casual surfer or a heavy data addict, Riah Topup have an affordable data plan for you.</p>

                            <h4 style={{
                                fontSize: "22px", fontFamily: " 'Courier New', Courier, monospace",
                                fontWeight: 600
                            }} >ALL AIRTIME PURCHASE (2% DISCOUNT)</h4>
                        </div>
                    </div>
                    {/*<!-- OwL -->*/}
                    <div className="col-xl-8 col-lg-8 col-md-col-md-7">
                        <div className="app-active owl-carousel">
                            <div className="single-cases-img">
                                <img src="/assets/img/gallery/mtn.png" alt="" />
                            </div>
                            <div className="single-cases-img">
                                <img src="/assets/img/gallery/glo.png" alt="" />
                            </div>
                            <div className="single-cases-img">
                                <img src="/assets/img/gallery/airtel.png" alt="" />
                            </div>
                            <div className="single-cases-img">
                                <img src="/assets/img/gallery/9mobile.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Applic App End -->
        <!-- Best Pricing Start -->*/}
        <section id="services" className="best-pricing pricing-padding" data-background="/assets/img/gallery/best_pricingbg.jpg">
            <div className="container">
                {/*<!-- Section Tittle -->*/}
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="section-tittle section-tittle2 text-center">
                            <h2>Our Service</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- Best Pricing End -->
        <!-- Pricing Card Start -->*/}
        <div className="pricing-card-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-card text-center mb-30">
                            <div className="card-top">
                                <span><i className="fa fas-coin"></i></span>
                                <h4 >GOTV<span>  Plan</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>GOTV</li>
                                    <li>GOTV MAX &nbsp;&nbsp;&nbsp;3600</li>
                                    <li>GOTV JOLLI &nbsp;&nbsp;&nbsp;	2460</li>
                                    <li>GOTV JINJA 	&nbsp;&nbsp;&nbsp;	1640</li>
                                    <li> GOTV SMALLIE &nbsp;&nbsp;&nbsp;	800	</li>

                                </ul>
                                <Link href="/login" passHref><a className="btn card-btn1">Get Started</a></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-card  text-center mb-30">
                            <div className="card-top">
                                <span> </span>
                                <h4 >DSTV<span>Plan</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>DSTV PADI&nbsp;&nbsp;&nbsp;	1850 </li>
                                    <li> DSTV YANGA &nbsp;&nbsp;&nbsp;		2565</li>
                                    <li>DSTV CONFAM&nbsp;&nbsp;&nbsp;	4615	</li>
                                    <li>DSTV COMPACT&nbsp;&nbsp;&nbsp;	7900	</li>
                                    <li> DSTV PREMIUM&nbsp;&nbsp;&nbsp;	18400	</li>
                                    <li> DSTV ASIA &nbsp;&nbsp;&nbsp;		6,200	</li>
                                </ul>
                                <a href="/login" className="btn card-btn1">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-card shadow text-center mb-30">
                            <div className="card-top">
                                <span> </span>
                                <h4>STARTIMES<span>Plan</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>NOVA&nbsp;&nbsp;&nbsp;900 </li>
                                    <li>BASIC &nbsp;&nbsp;&nbsp;1700 </li>
                                    <li>SMART&nbsp;&nbsp;&nbsp;2,200 </li>
                                    <li>CLASSIC &nbsp;&nbsp;&nbsp;2500 </li>
                                    <li>SUPER &nbsp;&nbsp;&nbsp;4200</li>
                                </ul>
                                <a href="/login" className="btn card-btn1">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6">

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-card shadow  text-center mb-30">
                            <div className="card-top">
                                <span> </span>
                                <h4 >PHCN<span>Plan</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>

                                    <li>DSTV PADI&nbsp;&nbsp;&nbsp;₦1850 </li>
                                    <li> DSTV YANGA &nbsp;&nbsp;&nbsp;₦2565</li>
                                    <li>DSTV CONFAM&nbsp;&nbsp;&nbsp;₦4615	</li>
                                    <li>DSTV COMPACT&nbsp;&nbsp;&nbsp;₦7900	</li>
                                    <li> DSTV PREMIUM&nbsp;&nbsp;&nbsp;₦18400	</li>
                                    <li> DSTV ASIA &nbsp;&nbsp;&nbsp;₦6,200	</li>
                                </ul>
                                <a href="/login" className="btn card-btn1">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-card shadow text-center mb-30">
                            <div className="card-top">
                                <span><i className="fa fas-coin"></i></span>
                                <h4 >AIRTIME <span>TO CASH</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>GOTV</li>
                                    <li>GOTV MAX &nbsp;&nbsp;&nbsp;₦3600</li>
                                    <li>GOTV JOLLI &nbsp;&nbsp;&nbsp;	₦2460</li>
                                    <li>GOTV JINJA 	&nbsp;&nbsp;&nbsp;	₦1640</li>
                                    <li> GOTV SMALLIE &nbsp;&nbsp;&nbsp;	₦800	</li>

                                </ul>
                                <a href="/login" className="btn card-btn1">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6">

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Pricing Card End -->
        <!-- Our Customer Start -->
                 
        <!-- Our Customer End -->
        <!-- Available App  Start-->
       
        <!-- Available App End-->
        <!-- Say Something Start -->
      
       <!-- Say Something End -->*/}

    </main>
}

export { BodyMain }