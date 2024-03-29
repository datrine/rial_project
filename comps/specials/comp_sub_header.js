let SubHeader = () => {
    return <>
        <div>
            <section className="container justify-content-center">
                <nav className="navbar navbar-expand-md navbar-light p-0 " id="navs" >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse   " id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link active" href="/dashboard" id="linkup"> <i className="fas fa-home" style={{ fontSize: "25px", color: "#4621ad" }}></i> DASHBOARD </a>
                            </li>
                            <li className="nav-item " >
                                <a className="nav-link" id="linkup" href="/airtime" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> AIRTIME TO CASH</a>
                            </li>
                            <li className="nav-item " >
                                <a className="nav-link" id="linkup" href="/referrals" ><i className="fas fa-money-bill-wave" style={{ fontSize: "25px", color: "#4621ad" }}></i> REFERRALS</a>
                            </li>

                            <li className="nav-item " >
                                <a className="nav-link " id="linkup" href="/wallet"><i className="fa fa-briefcase" style={{ fontSize: "25px", color: "#4621ad" }}></i> WALLET</a>
                            </li>

                            <li className="nav-item " >
                                <a className="nav-link " id="linkup" href="/profile"  ><i className="fa fa-user" style={{ fontSize: "25px", color: "#4621ad" }}></i> PROFILE</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    </>
}

export { SubHeader }