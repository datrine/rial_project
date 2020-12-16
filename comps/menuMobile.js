import { useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faBars, faHome, faListAlt, faCartPlus, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"

//component for the mobile menu
function MobileMenu({ }) {
    return <>
        <div className="container-fluid d-md-none" style={{
            position: "fixed", top: 0, padding: 0, paddingBottom: "15px", zIndex: 500
        }}>
            <CollapsibleMenu />
        </div>
    </>;
}

//phone and tablet views: component for expanded view of the collapsible menu
function MenuView({ catListObj = {}, autoCollapseParent }) {
    let findLevel = (listObj, header) => {
        let tempList = listObj.list;
        let tracker = 0;
        while (tempList.length > 0) {
            if (tempList[tracker].header === header) {
                return tempList[tracker];
            }
            if (tempList[tracker].list > 0) {
                tempList.push(...tempList[tracker].list)
            }
            tracker++;
        }
        return { ...catListObj };
    }
    let findParent = (listObj, header, level) => {
        let tempList = listObj.list;
        let tracker = 0;

        if (listObj.level === level) {
            return listObj;
        }

        while (tempList.length > 0) {
            if (tempList[tracker].level === level && findLevel(listObj, header).header === header) {
                return tempList[tracker];
            }
            if (tempList[tracker].list > 0) {
                tempList.push(...tempList[tracker].list)
            }
            tracker++;
        }
        return { ...catListObj };
    }
    let [catListObjState, changeCatListObjState] = useState({ ...catListObj })
    return <><div style={{
        position: "fixed", color: "white", top: 0, left: 0, bottom: 0, right: "50px",
        zIndex: 500, paddingRight: "10px", paddingTop: "10px", backgroundColor: "rgba(0,0,0,0.7)"
    }} >
        <div style={{ listStyle: "none", fontSize: "25px" }}>
            <button onClick={
                e => {
                    if (catListObjState.level !== 0) {
                        let newCatObj = findParent(catListObj, catListObjState.header,
                            catListObjState.level - 1)
                        changeCatListObjState(newCatObj)
                    } else {
                        console.log("Collapse parent")
                        autoCollapseParent(true)
                    }
                }
            } className="w3-btn w3-text-white"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <span style={{ width: "100px", fontWeight: "bold" }}>{catListObjState.header}</span>
        </div>
        <div>
            <ul style={{ listStyle: "none", fontSize: "20px" }}>{
            catListObjState.list.map((catItem, index) =>
                <li key={index} onClick={
                    e => {
                        let newCatObj = findLevel(catListObj, catItem.header)
                        changeCatListObjState(newCatObj)
                    }
                } >
                    <p> {catItem.icon ?
                        <img width={30} height={30} src={catItem.icon} /> :

                        <FontAwesomeIcon icon={faCartPlus} />} <span>{catItem.header}</span></p></li>)}</ul>
        </div>
        <p style={{ textAlign: "center", position: "absolute", bottom: 70, width: "100%", fontSize: "20px" }}>Log In</p>
    </div></>
}

//phone and tablet views: component for the collapsible menu
function CollapsibleMenu() {
    let [isCollapsed, autoCollapse] = useState(true)

    let handleCollapseBtnClick = (e) => autoCollapse(!isCollapsed)
    let handleOnBlur = (e) => {
        if (e.currentTarget === e.target) {
            console.log('unfocused self');
        }
         else {
            console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
            console.log('focus left self');
            autoCollapse(true)
        }
    }

    let collapsibleBtn = <button className="w3-btn"
        onClick={handleCollapseBtnClick}>
        <FontAwesomeIcon icon={faTimes} style={{ zIndex: 2000 }} />
    </button>

    let expandBtn = <button style={{}} className="w3-btn" onClick={handleCollapseBtnClick}>
        <FontAwesomeIcon icon={faBars} />
    </button>
    return isCollapsed ?
        <div>
            {expandBtn}
        </div> :
        <div>
            {collapsibleBtn}
            <div id="div_menu" onBlur={handleOnBlur} >
                {/* <Links autoCollapseParent={autoCollapse} />*/}
                <MenuView hookHandleOnBlur={handleOnBlur} catListObj={catList} autoCollapseParent={handleCollapseBtnClick} />
            </div>
        </div>
}

let catList = {
    level: 0,
    header: "All Categories",
    list: [
        {
            level: 1,
            header: "Home",
            list: [],
            isLink: true,
            icon: "",
        },
        {
            level: 1,
            header: "Services",
            isLink: true,
            icon: "",
        },
        {
            level: 1,
            header: "My Account",
            isLink: true,
            icon: "",
        },
        {
            level: 1,
            header: "Contact",
            isLink: true,
            icon: "",
        },
    ]
}

export { MobileMenu }