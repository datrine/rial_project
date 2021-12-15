import { useSession } from 'next-auth/client';
import { Scripts, CompHTMLHeader, Header, CompPreloader } from '../comps/gen_page/gen_exporter';
import { Comp_Airtime } from '../comps/specials/comp_airtime';
export default function Airtime() {
    let [session, loading] = useSession()
    return <>
        <CompHTMLHeader />
        <CompPreloader />
        {session ? <Comp_Airtime user={session.user} /> : null}
        <Scripts />
    </>
}

