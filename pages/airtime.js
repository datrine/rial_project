import { Scripts, CompHTMLHeader, Header, CompPreloader } from '../comps/gen_page/gen_exporter';
import { Comp_Airtime } from '../comps/specials/comp_airtime';
export default function Airtime() {
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        <Comp_Airtime />
        <Scripts />
    </>
}

