import Link from 'next/link';
import { CompHTMLHeader, CompPreloader, Header, Scripts } from "../comps/gen_page/gen_exporter"
import dynamic from "next/dynamic"
import { Comp_Login } from '../comps/specials/comp_login';

let Login = () => {
    return <>
        <CompHTMLHeader />
        {/*<!-- Preloader Start -->*/}
        <CompPreloader />
        {/*<!-- Preloader Start -->*/}
        <Header />
        <Comp_Login/>
        <Scripts />
    </>
}

export default Login;
