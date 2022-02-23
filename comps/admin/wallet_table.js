import { signIn } from "next-auth/client"
import { createContext, useContext, useEffect, useState } from "react"
import { UserContext, WalletContext } from "../ctxs";
import { DashFooter, DashHeader, DashMainBar, DashSideBar, OtherScripts } from "./reusable"
createContext({
    user: undefined
});
export function Comp_AdminWalletTbl() {
    console.log("uuuuuu")
    return <>
        <Dashboard />
    </>
}

function Dashboard(params) {
    return <>
        <DashHeader />
        <body class="sb-nav-fixed">

            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a class="navbar-brand" href="dashboard.php">Riah Topup</a>
                <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>

                <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

                </form>

                <ul class="navbar-nav ml-auto ml-md-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">

                            <a class="dropdown-item" href="logout.php">Logout</a>
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
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">
                <UserTable />
                <div class="container well my_assets">
                    <div class="row">
                        <div class="col-md-10">
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
    let [walletsState, changeWallets] = useState([])
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
        <table class="table table-hover" width="100%" style={{ textAlign: "center", border: "1px solid #eee" }}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Balance</th>
                    <th>Transaction Date</th>
                </tr>
            </thead>
            <tbody>
                {walletsState.map((wallet, index) => <>
                    <WalletContext.Provider value={{ wallet }} key={index} >
                        <RowInfo index={index} />
                    </WalletContext.Provider>
                </>)}



            </tbody>
        </table>
    </>
}

function RowInfo({ index }) {
    let { wallet } = useContext(WalletContext);
    let [walletState, changedWalletState] = useState(wallet)
    return <>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{walletState.username}</td>
            <td>{walletState.balance}</td>
            <td>{new Date(walletState.createdOn).toLocaleDateString()}</td>
        </tr>
    </>
}