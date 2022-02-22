import { Header, CompPreloader, CompHTMLHeader, Scripts, } from "../../comps/gen_page/gen_exporter"
import { Comp_AdminLogin } from '../../comps/admin/admin_comp_login';
import { csrfToken, getProviders, signOut, signout, useSession } from 'next-auth/client'
import { useRouter } from "next/router"
import { useEffect } from "react";
import { Comp_AdminDashboard } from "../../comps/admin";

export default function Home() {
  let router = useRouter();
  let { query: { callbackUrl } } = router
  let [session, loading] = useSession();
 
  return <>
    <CompHTMLHeader />
    {session ?<Comp_AdminDashboard/>:
     <Comp_AdminLogin 
     csrfToken={csrfToken} callbackUrl={callbackUrl} />}
    <Scripts />
  </>
}
