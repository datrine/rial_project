import Link from 'next/link';

let Header = () => {
  return <header>
    {/* <!-- Header Start -->*/}
    <div className="header-area header-transparrent ">
      <div className="main-header header-sticky">
        <div className="container">
          <div className="row align-items-center">
            {/*<!-- Logo -->*/}
            <div className="col-xl-2 col-lg-2 col-md-2">
              <div className="logo">
                <Link href="/" passHref><a>
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
                    <li className="active"><Link href="/" passHref><a> Home</a></Link></li>
                    <li><a href="#services">Services</a></li>
                    <li><Link passHref={true} href="/login"><a>My Account</a></Link></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!-- Mobile Menu -->*/}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none">
                <div className="slicknav_menu">
                  <Link passHref={true} href="#">
                    <a aria-haspopup="true" role="button" tabIndex="0" aria-pressed="true"
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
                      <Link href="/" passHref><a role="menuitem" tabIndex="-1"> Home</a>
                      </Link>
                    </li>

                    <li>
                      <Link passHref={true} href="#services"><a role="menuitem" tabIndex="-1">Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link passHref={true} href="/login"><a role="menuitem" tabIndex="-1">My Account</a></Link>
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

export { Header };