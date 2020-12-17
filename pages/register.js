import { Comp_Register } from '../comps/specials/comp_register';
import { Header, CompHTMLHeader,Comp_Carousel, Scripts, CompPreloader} from "../comps/gen_page/gen_exporter"
export default function Register() {
    return <>
    <CompHTMLHeader/>
    <CompPreloader/>
    <Header/>
    <Comp_Register/>
    <Scripts/>
    </>
}

