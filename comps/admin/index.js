import { signIn, signOut } from "next-auth/client"
import { useEffect, useState } from "react"
import { DashFooter, DashHeader, DashMainBar, DashSideBar, OtherScripts } from "./reusable"

export function Comp_AdminDashboard() {
    return <>
        <Dashboard />
    </>
}

function UserDiv(params) {
    let [userCount, changeUserCount] = useState(0)
    useEffect(() => {
        (async () => {
            try {

                let res = await fetch(`/api/users`);
                let { users } = await res.json();
                console.log(users)
                changeUserCount(users.length)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);
    return <>
        <div class="col-xl-3 col-md-6">
            <div class="card bg-primary text-white mb-4">
                <div class="card-body">
                    {userCount} Users</div>
                <div class="card-footer d-flex align-items-center justify-content-between">


                    <a class="small text-white stretched-link " href="/admin/users">View Details</a>
                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div></>
}

function WalletDiv(params) {
    let [walletCount, changeWalletCount] = useState(0)
    useEffect(() => {
        (async () => {
            try {

                let res = await fetch(`/api/wallets`);
                let { wallets } = await res.json();
                console.log(wallets)
                changeWalletCount(wallets.length)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);
    return <>
        <div class="col-xl-3 col-md-6">
            <div class="card bg-success text-white mb-4">
                <div class="card-body">
                    {walletCount} Wallets</div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                    <a class="small text-white stretched-link" href="/admin/wallet">View Details</a>
                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div></>
}

function TransactionDiv(params) {
    let [transactionCount, changeTransactionCount] = useState(0)
    useEffect(() => {
        (async () => {
            try {

                let res = await fetch(`/api/transactions`);
                let { transactions } = await res.json();
                console.log(transactions)
                changeTransactionCount(transactions.length)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);
    return <>
        <div class="col-xl-3 col-md-6">
            <div class="card bg-info text-white mb-4">
                <div class="card-body">{transactionCount} Transactions</div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                    <a class="small text-white stretched-link" href="/admin/transaction">View Details</a>
                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div></>
}

function DashContent(params) {
    return <>
        <DashMainBar>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">

                <UserDiv />

                <div class="col-xl-3 col-md-6">
                    <div class="card bg-warning text-white mb-4">
                        <div class="card-body">
                            Change Password</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="admin/change_pass">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>

                <WalletDiv />

                <TransactionDiv />

                <div class="col-xl-3 col-md-6">
                    <div class="card bg-danger text-white mb-4">
                        <div class="card-body">Total Balance</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area mr-1"></i>
                            Area Chart Example
                        </div>
                        <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-bar mr-1"></i>
                            Bar Chart Example
                        </div>
                        <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table mr-1"></i>
                    DataTable Example
                </div>
                <div class="card-body">
                    <div class="table-responsive">

                    </div>
                </div>
            </div>
        </DashMainBar>
    </>
}

function Dashboard(params) {
    return <>
        <DashHeader />
        <body class="sb-nav-fixed">

            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a class="navbar-brand" href="/admin/dashboard">Raish Topup</a>
                <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>

                <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

                </form>

                <ul class="navbar-nav ml-auto ml-md-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">

                            <a class="dropdown-item" onClick={e => {
                                e.preventDefault();
                                signOut()
                            }}>Logout</a>
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