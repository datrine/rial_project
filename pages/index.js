import Link from 'next/link';
import dynamic from "next/dynamic"
import { Header, CompPreloader, CompHTMLHeader, Scripts, BodyFooter } from "../comps/gen_page/gen_exporter"
let BodyMainDyn = dynamic(() => import("../comps/index_body_main").then(mod=>mod.BodyMain), { ssr: false })

let CompPreloaderDyn = dynamic(() =>
    import("../comps/gen_page/preloader").then(mod => mod.CompPreloader), { ssr: false })
export default function Home() {
  return <>
    <>
      <CompHTMLHeader />
      {/*<!-- Preloader Start -->*/}
      <CompPreloaderDyn />
      {/*<!-- Preloader Start -->*/}
      <Header />
      <BodyMainDyn />
      <BodySection />
      {/*<!-- ================ contact section end ================= -->*/}
      <BodyFooter />
    </>
    {/*<!-- JS here -->

<!-- All JS Custom Plugins Link Here here -->*/}
    <Scripts />
    <Link passHref={true} href="#top"><a id="scrollUp" style={{ position: "fixed", zIndex: 2147483647, display: "none" }}>
      <i className="ti-arrow-up"></i>
    </a>
    </Link>
  </>
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
                    onFocus={e => { }} onBlur={e => {
                      e.target.placeholder = " Enter Message"
                    }
                    } placeholder=" Enter Message"></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control valid" name="name" id="name"
                    type="text" onFocus={e => { }} onBlur={e => {
                      e.target.placeholder = " Email Address "
                    }
                    }
                    placeholder="Enter your name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control valid" name="email" id="email"
                    type="email" onFocus={e => { }}
                    onBlur={e => {
                      e.target.placeholder = " Enter Email "
                    }
                    }
                    placeholder="Email" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject"
                    type="text" onFocus={e => { }} onBlur={e => {
                      e.target.placeholder = " Enter Subject "
                    }
                    }
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
              <Link href="https://www.instagram.com/isparkafrica" passHref><a>
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
              <Link href="https://www.facebook.com/isparkafrica" passHref><a>
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

