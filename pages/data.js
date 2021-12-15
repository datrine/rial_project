import { Scripts, CompHTMLHeader, Header, CompPreloader } from '../comps/gen_page/gen_exporter';
import { Comp_Data } from '../comps/specials/comp_data';
import DashboardFooter from '../comps/specials/dashboard_footer';
export default function Airtime() {
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        <Comp_Data />
        <DashboardFooter/>
        <Scripts />
    </>
}

