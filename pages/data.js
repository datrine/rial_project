import { Scripts, CompHTMLHeader, Header, CompPreloader } from '../comps/gen_page/gen_exporter';
import { Comp_Data } from '../comps/specials/comp_data';
export default function Airtime() {
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        <Comp_Data />
        <Scripts />
    </>
}

