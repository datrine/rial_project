import { signIn } from "next-auth/client"
import { createContext, useContext, useEffect, useState } from "react"
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { UserContext, WalletContext } from "../ctxs";
import { DashFooter, DashHeader, DashMainBar, DashSideBar, OtherScripts } from "./reusable"

import { FaSpinner } from "react-icons/fa"

export function Comp_AdminWalletTbl() {
    console.log("uuuuuu")
    return <>
        <Dashboard />
    </>
}

function Dashboard(params) {
    return <>
        <DashHeader />
        <body className="sb-nav-fixed">

            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="dashboard.php">Riah Topup</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>

                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

                </form>

                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">

                            <a className="dropdown-item" href="logout.php">Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div id="layoutSidenav">
                <DashSideBar />
                <DashContent />
            </div>
            <DashFooter />
            <OtherScripts />
        </body>
    </>
}

function DashContent(params) {
    return <>
        <DashMainBar>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <div className="row">
                <UserTable />
                <div className="container well my_assets">
                    <div className="row">
                        <div className="col-md-10">
                            <nav aria-label="Page navigation">

                            </nav>
                        </div>

                    </div>

                    <style jsx>

                        {`.a{
		border: 1px solid #007bff;
		padding-left:15px;
		padding-right:15px;
		padding-top: 5px;
		padding-bottom:5px;
		margin-right:5px;
		text-transform: none; 
		text-decoration: none;
		background: #007bff;
		color: #fff;
		border-radius: 5px;
	}
	
	.a:hover{
		border: 1px solid #28a745;
		background: #28a745;
		color: #fff;
		border-radius: 5px;
	}
`}
                    </style>
                </div>
            </div>
        </DashMainBar>
    </>
}

function UserTable(params) {
    let [walletsState, changeWallets] = useState([]);
    //console.log(handleModalProceed)
    useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/wallets`);
                let { wallets } = await res.json();
                changeWallets(wallets)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);
    return <>
        <table className="table table-hover" width="100%" style={{ textAlign: "center", border: "1px solid #eee" }}>
            <thead>
                <tr>
                    <th>#</th>
                    <th style={{ textAlign: "left" }}>Username</th>
                    <th style={{ textAlign: "left" }}>Balance (₦)</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            <tbody>
                {walletsState.map(
                    (wallet, index) => <WalletContext.Provider
                        value={{ wallet, }} key={index} >
                        <RowInfo key={index}
                            index={index} />
                    </WalletContext.Provider>)}
            </tbody>
        </table>

    </>
}

function RowInfo({ index, ...props }) {
    let { wallet } = useContext(WalletContext);
    return <>
        <tr key={index}>
            <td>{index + 1}</td>
            <td style={{ textAlign: "left" }}>{wallet.username}</td>
            <BalanceField {...props} />
            <td>{new Date(wallet.createdOn).toLocaleDateString()}</td>
        </tr>
    </>
}

function BalanceField({ ...props }) {
    let { wallet } = useContext(WalletContext);
    let [walletState, changeWalletState] = useState(wallet)
    let [btnState, changeBtnState] = useState("Edit");
    let view = <> </>
    let dialogObjPropsUpdater = props.updateHandlerModalObj;
    let dialogModalObj = props.modalObj;
    switch (btnState) {
        case "Save": {
            let handleSaveBalanceEdit = async e => {
                try {
                    let res = await fetch("/api/admin/actions/edit_wallet", {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ username: walletState.username, amount: walletState.balance })
                    });
                    let data = await res.json();
                    console.log(data)
                } catch (error) {
                    console.log(error)
                    //revert to "original" balance
                    changeWalletState({ ...walletState, balance: wallet.balance })
                }
            };

            view = <><form>
                <Container>
                    <Row>
                        <Col>
                            <input className="w3-input" 
                            onChange={e => {
                                changeWalletState({ ...walletState, balance: e.target.value })
                            }} value={walletState.balance} />
                            </Col>
                        <Col>
                            <button
                                onClick={e => {
                                    e.preventDefault()
                                    handleSaveBalanceEdit(e)
                                }}
                                className="btn"
                                style={{ backgroundColor: "grey" }} >
                                {btnState}
                            </button>
                            <button style={{color:"red"}} className="btn" onClick={e => {
                                changeBtnState("Edit")
                            }}>x</button>
                        </Col>
                    </Row>
                </Container>
            </form>
            </>
        }
            break;
        case "Edit": {
            let handleBtnClick = e => {
                changeBtnState("Save")
            }
            view = <><Container>
                <Row>
                    <Col><p>{walletState.balance}</p></Col>
                    <Col> <button onClick={handleBtnClick} className="btn"
                    style={{ backgroundColor: "grey" }} >
                    {btnState}
                </button></Col>
                </Row>
            </Container>
               
            </>
        }
            break;

        default:
            break;
    }

    return <><td style={{ textAlign: "left" }}>{view}</td></>
}

function DialogOfWhat2({ modalProcessingState, handleProcessing, handleCompleted, modalTitle, handleClose, modalBody, handleProceed, handleCancel }) {

    let btn = null;
    switch (modalProcessingState) {
        case "start":
            btn = <Button onClick={handleProceed} variant="primary">Save changes...</Button>
            break;
        case "processing":
            btn = <Button onClick={handleProcessing} variant="primary"><FaSpinner /></Button>
            break;
        case "completed":
            btn = <Button onClick={handleProcessing} variant="primary"></Button>
            break;

        default:
            break;
    }
    return <>
        <Modal show={true} >
            <Modal.Header onClick={handleClose} closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {modalBody}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleCancel} variant="secondary">Close</Button>
                {btn}
            </Modal.Footer>
        </Modal>
    </>
}