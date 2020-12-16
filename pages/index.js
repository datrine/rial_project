import Link from 'next/link';
import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>Riah Topup</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.svg" />

      {	/*<!-- CSS here -->*/}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/flaticon.css" />
      <link rel="stylesheet" href="assets/css/slicknav.css" />
      <link rel="stylesheet" href="assets/css/animate.min.css" />
      <link rel="stylesheet" href="assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/css/themify-icons.css" />
      <link rel="stylesheet" href="assets/css/slick.css" />
      <link rel="stylesheet" href="assets/css/nice-select.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
    </Head>
    <>
      {/*<!-- Preloader Start -->*/}
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="/assets/img/logo/favicon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Preloader Start -->*/}
      <BodyHeader />
      <main>
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
                        <Link href="login.php" passHref><a data-animation="fadeInLeft" data-delay="1.0s"
                          className="btn radius-btn">Get Started</a></Link>

                        {/*  <!-- Video Btn -->*/}

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
                        {/* <!-- Hero-btn -->*/}
                        <Link href="/industries" passHref><a data-animation="fadeInLeft" data-delay="1.0s"
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
        {/*<!-- Slider Area End -->*/}

        {/*<!-- Best Features Start -->*/}

        {/*<!-- Best Features End -->*/}
        {/*<!-- Services Area Start -->*/}

        {/*<!-- Services Area End -->*/}
        { /*<!-- Applic App Start -->*/}
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
        {/*<!-- Applic App End -->*/}

        {/*<!-- Best Pricing Start -->*/}
        <section id="services" className="best-pricing pricing-padding" data-background="assets/img/gallery/best_pricingbg.jpg"
          style={{ backgroundImage: " url(/assets/img/gallery/best_pricingbg.jpg)" }}>
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
                    <h4>GOTV<span>  Plan</span></h4>
                  </div>
                  <div className="card-bottom">
                    <ul>
                      <li>GOTV</li>
                      <li>GOTV MAX &nbsp;&nbsp;&nbsp;3600</li>
                      <li>GOTV JOLLI &nbsp;&nbsp;&nbsp;	2460</li>
                      <li>GOTV JINJA 	&nbsp;&nbsp;&nbsp;	1640</li>
                      <li> GOTV SMALLIE &nbsp;&nbsp;&nbsp;	800	</li>

                    </ul>
                    <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-card  text-center mb-30">
                  <div className="card-top">
                    <span> </span>
                    <h4>DSTV<span>Plan</span></h4>
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
                    <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                    </Link>
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
                      <li>classNameIC &nbsp;&nbsp;&nbsp;2500 </li>
                      <li>SUPER &nbsp;&nbsp;&nbsp;4200</li>
                    </ul>
                    <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">

              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-card shadow  text-center mb-30">
                  <div className="card-top">
                    <span> </span>
                    <h4>PHCN<span>Plan</span></h4>
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
                    <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-card shadow text-center mb-30">
                  <div className="card-top">
                    <span><i className="fa fas-coin"></i></span>
                    <h4>AIRTIME <span>TO CASH</span></h4>
                  </div>
                  <div className="card-bottom">
                    <ul>
                      <li>GOTV</li>
                      <li>GOTV MAX &nbsp;&nbsp;&nbsp;₦3600</li>
                      <li>GOTV JOLLI &nbsp;&nbsp;&nbsp;	₦2460</li>
                      <li>GOTV JINJA 	&nbsp;&nbsp;&nbsp;	₦1640</li>
                      <li> GOTV SMALLIE &nbsp;&nbsp;&nbsp;	₦800	</li>

                    </ul>
                    <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">

              </div>
            </div>
          </div>
        </div>
        { /*<!-- Pricing Card End -->
  <!-- Our Customer Start -->
           
  <!-- Our Customer End -->
  <!-- Available App  Start-->
 
  <!-- Available App End-->
  <!-- Say Something Start -->

  <!-- Say Something End -->*/}

      </main>

      <BodySection />
      {/*<!-- ================ contact section end ================= -->*/}
      <BodyFooter />
    </>
    {/*<!-- JS here -->

<!-- All JS Custom Plugins Link Here here -->*/}
    <script src="/assets/js/vendor/modernizr-3.5.0.min.js"></script>

    <script src="/assets/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="/assets/js/popper.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/jquery.slicknav.min.js"></script>
    <script src="/assets/js/owl.carousel.min.js"></script>
    <script src="/assets/js/slick.min.js"></script>

    <script src="/assets/js/wow.min.js"></script>
    <script src="/assets/js/animated.headline.js"></script>

    <script src="/assets/js/jquery.scrollUp.min.js"></script>
    <script src="/assets/js/jquery.nice-select.min.js"></script>
    <script src="/assets/js/jquery.sticky.js"></script>
    <script src="/assets/js/jquery.magnific-popup.js"></script>

    <script src="/assets/js/contact.js"></script>
    <script src="/assets/js/jquery.form.js"></script>
    <script src="/assets/js/jquery.validate.min.js"></script>
    <script src="/assets/js/mail-script.js"></script>
    <script src="/assets/js/jquery.ajaxchimp.min.js"></script>

    <script src="/assets/js/plugins.js"></script>
    <script src="/assets/js/main.js"></script>
    <Link passHref={true} href="#top"><a id="scrollUp" style={{ position: "fixed", zIndex: 2147483647, display: "none" }}>
      <i className="ti-arrow-up"></i>
    </a>
    </Link>
  </>
}

let BodyHeader = () => {
  return <header>
    {/* <!-- Header Start -->*/}
    <div className="header-area header-transparrent ">
      <div className="main-header header-sticky">
        <div className="container">
          <div className="row align-items-center">
            {/*<!-- Logo -->*/}
            <div className="col-xl-2 col-lg-2 col-md-2">
              <div className="logo">
                <Link href="/index"><a>
                  <img src="/assets/img/logo/Riah topup logo.png" width="200px" alt="" />
                </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              {/*<!-- Main-menu -->*/}
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li className="active"><Link href="/index"><a> Home</a></Link></li>
                    <li><Link passHref={true} href="#services"><a>Services</a></Link></li>
                    <li><Link passHref={true} href="/login"><a>My Account</a></Link></li>
                    <li><Link passHref={true} href="#contact"><a>Contact</a></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!-- Mobile Menu -->*/}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none">
                <div className="slicknav_menu">
                  <Link passHref={true} href="#"><a aria-haspopup="true" role="button" tabIndex="0" aria-pressed="true"
                    className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}>
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a></Link>
                  <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu"
                    style={{ display: "none" }}>
                    <li className="active">
                      <Link href="/index"><a role="menuitem" tabIndex="-1"> Home</a>
                      </Link>
                    </li>

                    <li>
                      <Link passHref={true} href="#services"><a role="menuitem" tabIndex="-1">Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link passHref={true} href="login.php"><a role="menuitem" tabIndex="-1">My Account</a></Link>
                    </li>
                    <li>
                      <Link passHref={true} href="#contact"><a role="menuitem" tabIndex="-1">Contact</a></Link>
                    </li>
                  </ul></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Header End -->*/}
  </header>

}

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
                    <Link href="login.php" passHref><a data-animation="fadeInLeft" data-delay="1.0s"
                      className="btn radius-btn">Get Started</a></Link>

                    {/*  <!-- Video Btn -->*/}

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
                    {/* <!-- Hero-btn -->*/}
                    <Link href="/industries" passHref><a data-animation="fadeInLeft" data-delay="1.0s"
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
    {/*<!-- Slider Area End -->*/}

    {/*<!-- Best Features Start -->*/}

    {/*<!-- Best Features End -->*/}
    {/*<!-- Services Area Start -->*/}

    {/*<!-- Services Area End -->*/}
    { /*<!-- Applic App Start -->*/}
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
    {/*<!-- Applic App End -->*/}

    {/*<!-- Best Pricing Start -->*/}
    <section id="services" className="best-pricing pricing-padding" data-background="assets/img/gallery/best_pricingbg.jpg"
      style={{ backgroundImage: " url(/assets/img/gallery/best_pricingbg.jpg)" }}>
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
                <h4>GOTV<span>  Plan</span></h4>
              </div>
              <div className="card-bottom">
                <ul>
                  <li>GOTV</li>
                  <li>GOTV MAX &nbsp;&nbsp;&nbsp;3600</li>
                  <li>GOTV JOLLI &nbsp;&nbsp;&nbsp;	2460</li>
                  <li>GOTV JINJA 	&nbsp;&nbsp;&nbsp;	1640</li>
                  <li> GOTV SMALLIE &nbsp;&nbsp;&nbsp;	800	</li>

                </ul>
                <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-card  text-center mb-30">
              <div className="card-top">
                <span> </span>
                <h4>DSTV<span>Plan</span></h4>
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
                <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                </Link>
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
                  <li>classNameIC &nbsp;&nbsp;&nbsp;2500 </li>
                  <li>SUPER &nbsp;&nbsp;&nbsp;4200</li>
                </ul>
                <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6">

          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-card shadow  text-center mb-30">
              <div className="card-top">
                <span> </span>
                <h4>PHCN<span>Plan</span></h4>
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
                <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-card shadow text-center mb-30">
              <div className="card-top">
                <span><i className="fa fas-coin"></i></span>
                <h4>AIRTIME <span>TO CASH</span></h4>
              </div>
              <div className="card-bottom">
                <ul>
                  <li>GOTV</li>
                  <li>GOTV MAX &nbsp;&nbsp;&nbsp;₦3600</li>
                  <li>GOTV JOLLI &nbsp;&nbsp;&nbsp;	₦2460</li>
                  <li>GOTV JINJA 	&nbsp;&nbsp;&nbsp;	₦1640</li>
                  <li> GOTV SMALLIE &nbsp;&nbsp;&nbsp;	₦800	</li>

                </ul>
                <Link href="login.php"><a className="btn card-btn1">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6">

          </div>
        </div>
      </div>
    </div>
    { /*<!-- Pricing Card End -->
<!-- Our Customer Start -->
       
<!-- Our Customer End -->
<!-- Available App  Start-->

<!-- Available App End-->
<!-- Say Something Start -->

<!-- Say Something End -->*/}

  </main>

}

let BodySection = () => {
  return <> <section id="contact" className="contact-section">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate={true}>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                    onFocus={e => { }} onBlur={e => { }} placeholder=" Enter Message"></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control valid" name="name" id="name"
                    type="text" onFocus={e => { }}
                    onBlur={e => { }}
                    placeholder="Enter your name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control valid" name="email" id="email"
                    type="email" onFocus={e => { }}
                    onBlur={e => { }}
                    placeholder="Email" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject"
                    type="text" onFocus={e => { }}
                    onBlur={e => { }}
                    placeholder="Enter Subject" />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm boxed-btn">Send</button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span>
              <Link href="https://www.instagram.com/isparkafrica"><a>
                <img src="/img/001-instagram.svg" alt="" width="25px" />
              </a>
              </Link>
            </span>&nbsp;&nbsp;
                       <div className="media-body">
              <h3>support@RiahTopup.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          <div className="media contact-info">
            <span>
              <Link href="https://wa.me/+2348130335681"><a>
                <img src="/img/002-whatsapp.svg" alt="" width="25px" />
              </a>
              </Link>
            </span>&nbsp;&nbsp;
                       <div className="media-body">
              <h3>+243 8053 565 2365</h3>
              <p>Mon to Sun 24/7</p>
            </div>
          </div>
          <div className="media contact-info">
            <span>
              <Link href="https://www.twitter.com/isparkafrica"><a>
                <img src="/img/013-twitter-1.png" alt="" width="25px" />
              </a>
              </Link>
            </span>&nbsp;&nbsp;
                       <div className="media-body">
              <h3>support@RiahTopup.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          <div className="media contact-info">
            <span>
              <Link href="https://www.facebook.com/isparkafrica"><a>
                <img src="/img/023-facebook-3.svg" alt="" width="25px" />
              </a>
              </Link></span>&nbsp;&nbsp;
                       <div className="media-body">
              <h3>support@RiahTopup.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}

let BodyFooter = () => {
  return <>
    <footer>
      {/*<!-- Footer Start-->*/}
      <div className="footer-main">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row  justify-content-between">
              <div className="col-lg-3 col-md-4 col-sm-8">
                <div className="single-footer-caption mb-30">
                  {/*<!-- logo -->*/}
                  <div className="footer-logo">
                    <Link href="/index" passHref><a>
                      <img src="assets/img/logo/Riah topup logo.png" alt="" width="200px" /></a>
                    </Link> </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <p className="info1">Leverage on our cheap data offering for all networks and do more in every area of your life.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><Link href="#" passHref><a>About</a></Link></li>
                      <li><Link href="#" passHref><a passHref>Features</a></Link></li>
                      <li><Link href="#" passHref><a passHref>Pricing</a></Link></li>
                      <li><Link href="#" passHref><a>Download</a></Link></li>
                      <li><Link href="#" passHref><a>Reviews</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Support</h4>
                    <ul>
                      <li><Link href="#" passHref><a>Report a bug</a></Link></li>
                      <li><Link href="#" passHref><a>Privacy Policy</a></Link></li>
                      <li><Link href="#" passHref><a>Terms & Conditions</a></Link></li>
                      <li><Link href="#" passHref><a>Sitemap</a></Link></li>
                      <li><Link href="#" passHref><a>FAQs</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Newsletter</h4>
                    <div className="footer-pera footer-pera2">
                      <p>Heaven fruitful doesn't over lesser in days. Appear </p>
                    </div>
                    {/* <!-- Form -->*/}
                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate={true}>
                          <input type="email" name="EMAIL" id="newsletter-form-email"
                            placeholder=" Email Address " className="placeholder hide-on-focus"
                            onFocus={e => {
                              e.currentTarget.value = "";
                            }} onblur="this.placeholder = ' Email Address '" />
                          <div className="form-icon">
                            <button type="submit" name="submit" id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm">
                              <img src="assets/img/shape/form_icon.png" alt="" /></button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Copy-Right -->*/}
            <div className="row align-items-center">
              <div className="col-xl-12 ">
                <div className="footer-copy-right">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. 
                       Template is licensed under CC BY 3.0. -->*/}
Copyright &copy;<script>document.write(new Date().getFullYear());
</script> Designed <i className="ti-heart" aria-hidden="true"></i> by
<Link href="https://isparkafrica.ng" passHref><a target="_blank">iSparkAfrica</a></Link>
                    {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Footer End-->*/}

    </footer>
  </>
}
