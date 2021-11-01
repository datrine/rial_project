import { Comp_Referrals } from '../comps/specials/comp_referrals';
import { Header, CompHTMLHeader,Comp_Carousel, Scripts, CompPreloader} from "../comps/gen_page/gen_exporter"
import DashboardFooter from '../comps/specials/dashboard_footer';
export default function Register() {
    return <>
    <CompHTMLHeader/>
    <CompPreloader/>
    <Comp_Referrals/>
    <DashboardFooter/>
    <Scripts/>
    </>
}

