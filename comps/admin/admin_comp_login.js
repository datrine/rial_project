import { useState } from "react"

export function Comp_AdminLogin() {
    return <>
        <div className="bg-primary mt-70">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <FormLogin />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div  className="mt-100" id="layoutAuthentication_footer">
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
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
            <script src="/admin/js/scripts.js"></script>
        </div>
    </>
}

let FormLogin = () => {
   let[emailState,changeEmailState]= useState("")
   let[passwordState,changePasswordState]= useState("")
    return <>
        <form onSubmit={
            e=>{
                console.log(callbackUrl)
                signIn("credentials", {
                    callbackUrl, password: passwordState,
                    userEmailOrName: emailOrUsernameState
                });
            }
        }>
            <div className="form-group">
                <label className="medium float-left">Email</label>
                <input value={emailState} onChange={
                    e=>{
                        changeEmailState(e.target.value)
                    }
                } className="form-control py-4" type="email" placeholder="Enter email address" />
            </div>
            <div className="form-group">
                <label className="medium float-left" htmlFor="inputPassword">Password</label>
                <input value={passwordState} onChange={
                    e=>{
                        changePasswordState(e.target.value)
                    }
                } className="form-control py-4" id="inputPassword" name="adminPass" type="password" placeholder="Enter password" />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                    <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                </div>
            </div>
            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                <a className="small" href="password.html">Forgot Password?</a>
                <input type="submit" value="Login" name="adminLogin" />
            </div>
        </form>
    </>
}
