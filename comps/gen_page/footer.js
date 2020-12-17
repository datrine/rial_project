import Link from 'next/link';
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
                        <img src="/assets/img/logo/Riah topup logo.png" alt="" width="200px" /></a>
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
                        <li><Link href="#" passHref><a >Features</a></Link></li>
                        <li><Link href="#" passHref><a>Pricing</a></Link></li>
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
                              }} onBlur={e => {
                                e.target.placeholder = " Email Address "
                              }
                              } />
                            <div className="form-icon">
                              <button type="submit" name="submit" id="newsletter-submit"
                                className="email_icon newsletter-submit button-contactForm">
                                <img src="/assets/img/shape/form_icon.png" alt="" /></button>
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

  export {BodyFooter}