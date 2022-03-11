import { signIn } from "next-auth/client"
import { useEffect, useState } from "react"

function DashHeader(params) {
    return <>
        <head>

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Dashboard - Riah Topup Admin</title>
            <link href="/admin/css/styles.css" rel="stylesheet" />
            <link href="/admin/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossOrigin="anonymous" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossOrigin="anonymous"></script>

        </head></>
}

function DashFooter(params) {
    return <>
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2020</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

function DashSideBar(params) {
    return <>
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <a className="nav-link" href="dashboard.php">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Raish Topup
                        </a>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Change Price
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">

                                <a className="nav-link" href="data_plan.php">Data Pan</a>
                                <a className="nav-link" href="cable.php">Cable Plan</a>
                                <a className="nav-link" href="airtime.php">Airtime Plan</a>
                                <a className="nav-link" href="details.php">Details</a>
                            </nav>
                        </div>



                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Raish Topup
                </div>
            </nav>
        </div></>
}

function DashMainBar({children}) {
    return <>

        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Dashboard</h1>
                    {children}
                </div>
            </main>

        </div></>
}

function OtherScripts(params) {
    return <>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script src="/js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossOrigin="anonymous"></script>
        <script src="/assets/demo/chart-area-demo.js"></script>
        <script src="/assets/demo/chart-bar-demo.js"></script>
        <script src="/assets/js/jquery-1.12.4.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossOrigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossOrigin="anonymous"></script>
        <script src="/assets/demo/datatables-demo.js"></script>
    </>
}

export {DashMainBar,OtherScripts,DashFooter,DashHeader,DashSideBar}