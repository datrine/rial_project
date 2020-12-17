import { Scripts, CompHTMLHeader, Header, CompPreloader } from '../comps/gen_page/gen_exporter';
import { Comp_Airtime } from '../comps/specials/comp_airtime';
export default function Airtime() {
    return <>
        <CompHTMLHeader />
        {/*<!-- Preloader Start -->*/}
        <CompPreloader />
        {/*<!-- Preloader Start -->*/}

        <Header />
<Comp_Airtime/>
        <footer className=" " style={{ background: "#e3e3e3" }}>
            <div className="container">
                <p>copyright 2020 &copy;. All right reserved.</p>
            </div>
        </footer>

        {/*<!-- A2C Calculator-->*/}
        <script src="/assets/js/a2ccalculator.js"></script>
        <Scripts />
    </>
}

