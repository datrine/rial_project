import Link from 'next/link';
import { CompHTMLHeader, CompPreloader, Header, Scripts } from "../../comps/gen_page/gen_exporter"

let AdminLogin = ({ csrfToken,callbackUrl }) => {
    let[session,loading]= useSession()
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        <Header />
        <Comp_AdminLogin csrfToken={csrfToken} callbackUrl={callbackUrl} />
        <Scripts />
    </>
}
AdminLogin.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
}
export default AdminLogin;
