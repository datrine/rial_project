import { Header, CompPreloader, CompHTMLHeader, Scripts, } from "../../comps/gen_page/gen_exporter"
import { Comp_AdminLogin } from '../../comps/admin/admin_comp_login';
import { csrfToken, useSession } from 'next-auth/client'
import { useRouter } from "next/router"

export default function Home() {
  let router = useRouter();
  let { query: { callbackUrl } } = router
  let [session, loading] = useSession();
  return <>
    <CompHTMLHeader />
    <CompPreloader />
    <Header />
    {session ? <Comp_AdminLogin csrfToken={csrfToken} callbackUrl={callbackUrl} /> :
      <p>Welcome</p>}
    <Scripts />
  </>
}
