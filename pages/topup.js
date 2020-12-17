import { Comp_Register } from '../comps/specials/comp_register';
import {CompHTMLHeader,Comp_Carousel, Scripts, CompPreloader} from "../comps/gen_page/gen_exporter"
import {Comp_TopUp} from "../comps/specials/comp_top_up"
export default function TopUp() {
    return <>
    <CompHTMLHeader/>
    <CompPreloader/>
    <Comp_TopUp/>
    <Scripts/>
    </>
}

