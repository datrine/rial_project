import { useState } from "react";
import Link from "next/link"
import Head from "next/head"
import { SubHeader } from "./comp_sub_header";
//component for the mobile menu
function Comp_TopUp({ isLoggedIn = true }) {
    /* <?php require_once "server.php";
     if (isset($_GET['ref'])){
         $_SESSION['ref'] = $_GET['ref'];
         if($_SESSION["user"] != "user"){
             header('location: login.php');
         }
     }
     ?>*/
    return <>
        <Comp_Header />
        <section class="body1">
<SubHeader/>
            {/*<!-- The Modal data -->*/}
            <div class="modal" id="datatopup">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/*<!-- Modal Header -->*/}
                        <div class="modal-header">

                            <h4 class="modal-title" style="font-size:25px; padding-bottom:10px;">Data Topup</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/*<!-- Modal body -->*/}
                        <div class="modal-body">

                            <form class="form-group " action="">
                                <div class="form-group pb-5">
                                    <select name="dd" class="form-control w-100" id="dd" required >

                                        <option value="">Select</option>

                                        <option value="<?= $row['id'];?>"> VALUE</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control w-100" placeholder="Phone Number" required />
                                </div>
                                <div class="form-group" id="my-select">

                                </div>



                                <br />
                                <button name="buy" class="p-3  btt">Buy now</button>
                            </form>


                        </div>

                        {/*<!-- Modal footer -->*/}
                        <div class="modal-footer">
                            <button type="button" class="btt p-3" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

            {/*<!-- The Modal cable tv-->*/}
            <div class="modal" id="cabletv">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/*<!-- Modal Header -->*/}
                        <div class="modal-header">

                            <h4 class="modal-title" style="font-size:25px; padding-bottom:10px;">CABLE Topup</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>





                        {/*<!-- Modal body -->*/}
                        <div class="modal-body">

                            <form class="form-group " action="">
                                <div class="form-group pb-5">
                                    <select name="di" class="form-control w-100" id="di" required >

                                        <option value="">Select</option>
                                        <option value="<?= $row['id'];?>">CABLE_NAME</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control w-100" placeholder="Card Number" required />
                                </div>
                                <div class="form-group" id="card-select">

                                </div>

                                <br />
                                <button name="buy" class="p-3  btt">Buy now</button>
                                <br />

                            </form>


                        </div>

                        { /* <!-- Modal footer -->*/}
                        <div class="modal-footer">
                            <button type="button" class="btt p-3" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>



            <div class="modal" id="buyairtime">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 style="font-size:25px; padding-bottom:10px;">AIRTIME</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">

                            <form class="form-group " action="">
                                <div class="form-group pb-5">
                                    <select name="dp" class="form-control w-100" id="dp" required >

                                        <option value="">Select</option>
                                        <option value="<?= $row['id'];?>">AIRTIME_NAME</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control w-100" placeholder="Card Number" required />
                                </div>
                                <div class="form-group" id="air-select">

                                </div>



                                <br />
                                <button name="buy" class="p-3  btt">Buy now</button>
                            </form>


                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btt p-3" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="clearfix container">
                <p class="float-right"><span><a href="index.php" class="bttn p-3">Home</a></span></p>
                <p class="float-left text1 ">Topup</p>
            </div><br />
            <div class="container">


            </div>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-md-4 " >
                        <div class="card bg-light  mt-2">
                            <div class="card-top  shadow p-4 float-center ">
                                <h4>DATA TOPUP</h4>
                            </div>
                            <div class="card-body  shadow p-4  ">
                                <div class=" row ">
                                    <div class="col-xs-6 col-md-6 p-2">
                                        <img src="/img/glo.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="/img/mtn.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="/img/air.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="img/mob.png" alt="" style="width:100px;" />
                                    </div>
                                </div>
                                <br />
                                <button class="bttn p-3 shadow-lg " data-toggle="modal" data-target="#datatopup">Top Up Data</button>

                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 " >
                        <div class="card bg-light  mt-2">
                            <div class="card-top  shadow p-4 float-center ">
                                <h4>CABLE TV</h4>
                            </div>
                            <div class="card-body  shadow p-4  ">
                                <div class=" row ">
                                    <div class="col-xs-6 col-md-6 p-2">
                                        <img src="/img/dst.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="img/gotv.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="/img/phcn.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="/img/sar.png" alt="" style="width:130px;" />
                                    </div>
                                </div>
                                <br />
                                <button class="bttn p-3 shadow-lg " data-toggle="modal" data-target="#cabletv">Buy Sub</button>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-light  mt-2">
                            <div class="card-top  shadow p-4 float-center ">
                                <h4>BUY AIRTIME</h4>
                            </div>
                            <div class="card-body  shadow p-4  ">
                                <div class=" row ">
                                    <div class="col-xs-6 col-md-6 p-2">
                                        <img src="img/glo.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="img/mtn.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="img/air.png" alt="" style="width:100px;" />
                                    </div>
                                    <div class="col-xs-6  col-md-6 p-2">
                                        <img src="img/mob.png" alt="" style="width:100px;" />
                                    </div>
                                </div>
                                <br />
                                <button class="bttn p-3 shadow-lg " data-toggle="modal" data-target="#buyairtime">Buy Airtime</button>

                            </div>
                        </div>
                    </div></div></div>
        </section>
        <br />

        <section class="p-3 mt-4" style="background-color: #e3e3e3;">
            <div class="container">
                <p>copyright 2020 &copy;. All right reserved.</p>
            </div>
        </section>
    </>;
}



export { Comp_TopUp }