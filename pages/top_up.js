import { Comp_Register } from '../comps/specials/comp_register';
import { Header, CompHTMLHeader,Comp_Carousel, Scripts} from "../comps/gen_page/gen_exporter"
import {Comp_TopUp} from "../comps/specials/comp_top_up"
export default function TopUp() {
    return <>
    <CompHTMLHeader/>
    <Header/>
    <Comp_TopUp/>
    <Scripts/>
    </>
}

