import Link from 'next/link';
import { CompHTMLHeader, CompPreloader, Header, Scripts } from "../comps/gen_page/gen_exporter"
import { Comp_Login } from '../comps/specials/comp_login';
import { csrfToken, useSession } from 'next-auth/client'

let Login = ({ csrfToken,callbackUrl }) => {
    //console.log("here in login")
    let[session,loading]= useSession()
    //console.log(session)
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        <Header />
        <Comp_Login csrfToken={csrfToken} callbackUrl={callbackUrl} />
        <Scripts />
    </>
}
Login.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
}
export default Login;
