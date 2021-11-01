import Link from 'next/link';
import Head from 'next/head'
import { Comp_Wallet } from "../comps/specials/comp_wallet"
import { Header, CompHTMLHeader, Comp_Carousel, Scripts } from "../comps/gen_page/gen_exporter"
import DashboardFooter from '../comps/specials/dashboard_footer';
export default function Login() {
    return <>
        <CompHTMLHeader />
        <Comp_Wallet />
        <DashboardFooter/>
        <Scripts />
    </>
}

