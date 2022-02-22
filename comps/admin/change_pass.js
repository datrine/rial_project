import { signIn } from "next-auth/client"
import { useEffect, useState } from "react"
import { DashFooter, DashHeader, DashMainBar, DashSideBar, OtherScripts } from "./reusable"

export function Comp_AdminChangePass() {
    return <>
        <Dashboard />
    </>
}

function DashContent(params) {
    return <>
        <DashMainBar>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">

                <div class="col-md-4">

                </div>
                <div class="col-md-4">
                    <div class="card-bottom">
                        <FormBar />
                    </div>
                </div>
            </div>
        </DashMainBar>
    </>
}

function FormBar(params) {
    return <>
        <form class="form-group " >
            <p class="text-danger"><b></b></p>
            <input class="form-control" style={{ padding: "25px 10px 25px 10px" }} value="<?= $customer['adminEmail']; ?>" placeholder="Current Email" type="email" name="email" id="" readonly /><br />
            <input class="form-control" type="password" placeholder="Current Password" value="<?= $customer['adminPass']; ?>" style={{ padding: "25px 10px 25px 10px" }} name="pass" id="" readonly /><br />

            <input class="form-control" type="email" placeholder="New Email" style={{ padding: "25px 10px 25px 10px" }} name="newEmail" id="" readonly /><br />


            <input class="form-control" type="password" placeholder="New Password" style={{ padding: "25px 10px 25px 10px" }} name="newPassword" id="" required /><br />
            <input class="form-control" type="password" placeholder="Confirm Password" style={{ padding: "25px 10px 25px 10px" }} name="confirmPassword" id="" placeholder="Enter New Password" required /><br />

            <input name="changePass" type="submit" style={{ color: "#fff", fontFamily: "'Courier New', Courier, monospace font-family:600" }} value="Submit" class=" btn btn-primary form-control" />
            <br />
        </form></>
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