import Link from 'next/link';
import Head from 'next/head'
import { Scripts, CompHTMLHeader, Header, CompPreloader } from '../comps/gen_page/gen_exporter';
import { Comp_Dashboard } from '../comps/specials/comp_dashboard';
export default function Login() {
    return <>
    <CompHTMLHeader/>
    <Comp_Dashboard/>
    <Scripts/>
    </>
}

