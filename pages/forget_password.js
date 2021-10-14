import { Comp_ForgetPass } from '../comps/specials/comp_forgetpassword';
import { CompHTMLHeader,Comp_Carousel,CompPreloader, Header } from '../comps/gen_page/gen_exporter';
export default function ForgetPass() {
    return <>
    <CompHTMLHeader/>
    <CompPreloader/>
            <Header />
    <Comp_ForgetPass/>
    </>
}

