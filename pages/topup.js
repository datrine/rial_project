import { Comp_Register } from '../comps/specials/comp_register';
import {CompHTMLHeader,Comp_Carousel, Scripts, CompPreloader} from "../comps/gen_page/gen_exporter"
import {Comp_TopUp} from "../comps/specials/comp_top_up"
import { useSession } from 'next-auth/client';
export default function TopUp() {
   let[session,loading]= useSession()
    return <>
    <CompHTMLHeader/>
    <CompPreloader/>
   {session? <Comp_TopUp user={session.user}/>:null}
    <Scripts/>
    </>
}

