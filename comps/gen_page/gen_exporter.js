import dynamic from "next/dynamic"
import{CompHTMLHeader} from "./html_head"
import {CompPreloader} from "./preloader"
import {Header} from "./header"
import {Scripts} from "./scripts"
import {BodyFooter} from "./footer"
import { Comp_Carousel } from "./comp_carousel"
//let CompPreloaderDyn = dynamic(() => import("./preloader").then(mod=>mod.CompPreloader), { ssr: false })

export{CompHTMLHeader,CompPreloader,Header,Scripts,BodyFooter,Comp_Carousel};