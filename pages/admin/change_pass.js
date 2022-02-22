import {  CompHTMLHeader, Scripts, } from "../../comps/gen_page/gen_exporter"
import { Comp_AdminLogin } from '../../comps/admin/admin_comp_login';
import { csrfToken, useSession } from 'next-auth/client'
import { useRouter } from "next/router";
import { Comp_AdminChangePass } from "../../comps/admin/change_pass";

export default function Home() {
  let router = useRouter();
  let { query: { callbackUrl } } = router
  let [session, loading] = useSession();
 
  return <>
    <CompHTMLHeader />
    {session ?<Comp_AdminChangePass/>:
     <Comp_AdminLogin 
     csrfToken={csrfToken} callbackUrl={callbackUrl} />}
    <Scripts />
  </>
}
