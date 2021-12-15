import { Comp_Referrals } from '../comps/specials/comp_referrals';
import { Header, CompHTMLHeader,Comp_Carousel, Scripts, CompPreloader} from "../comps/gen_page/gen_exporter"
import DashboardFooter from '../comps/specials/dashboard_footer';
import { useSession } from 'next-auth/client';
export default function Register() {
    let[session,loading]= useSession()
    return <>
    <CompHTMLHeader/>
    <CompPreloader/>
        {session ? <Comp_Referrals user={session.user} /> : null}
    <DashboardFooter/>
    <Scripts/>
    </>
}

