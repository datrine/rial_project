import Link from 'next/link';
import Head from 'next/head'
import { Comp_Wallet } from "../comps/specials/comp_wallet"
import { Header, CompHTMLHeader, Comp_Carousel, Scripts ,CompPreloader} from "../comps/gen_page/gen_exporter"
import DashboardFooter from '../comps/specials/dashboard_footer';
import { useSession } from 'next-auth/client';
export default function Login() {
    let[session,loading]= useSession()
    return <>
        <CompHTMLHeader />
    <CompPreloader/>
        {session ? <Comp_Wallet user={session.user} /> : null}
        <DashboardFooter/>
        <Scripts />
    </>
}
