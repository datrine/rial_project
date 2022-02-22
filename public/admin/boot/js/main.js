$(document).ready(function(){
	var DOMAIN = "http://localhost/inv_project/public_html";
	$("#register_form").on("submit",function(){
		var status = false;
		var name = $("#username");
		var email = $("#email");
		var pass1 = $("#password1");
		var pass2 = $("#password2");
		var type = $("#usertype");
		var n_patt = new RegExp(/^[A-Za-z ]+$/);
		var e_patt = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);

		if (name.val() == "" || name.val().length < 6 ) {
			name.addClass("border-danger");
			$("#u_error").html("<span class='txet-danger'>Please Enter Name and it should be more than 6 charater</span>");
			status = false;
		}else{
			name.removeClass("border-danger");
			$("#u_error").html("");
			status = true;
		}
		if (!e_patt.test(email.val())) {
			email.addClass("border-danger");
			$("#e_error").html("<span class='txet-danger'>Please Enter Valid Email</span>");
			status = false;
		}else{
			email.removeClass("border-danger");
			$("#e_error").html("");
			status = true;
		}
		if (pass1.val() == "" || pass1.val().length < 6) {
			pass1.addClass("border-danger");
			$("#p1_error").html("<span class='txet-danger'>Please Enter at least 6 digit password</span>");
			status = false;
		}else{
			pass1.removeClass("border-danger");
			$("#p1_error").html("");
			status = true;
		}
		if (pass2.val() == "" || pass2.val().length < 6) {
			pass2.addClass("border-danger");
			$("#p2_error").html("<span class='txet-danger'>Please Enter at least 6 digit password</span>");
			status = false;
		}else{
			pass2.removeClass("border-danger");
			$("#p2_error").html("");
			status = true;
		}
		if (type.val() == "" ) {
			type.addClass("border-danger");
			$("#t_error").html("<span class='txet-danger'>select one </span>");
			status = false;
		}else{
			type.removeClass("border-danger");
			$("#t_error").html("");
			status = true;
		}
		if (pass1.val() == pass2.val() && status == true) {
				$.ajax({
					url : DOMAIN+"/includes/process.php",
					method: "POST",
					data: $("#register_form").serialize(),
					success: function(data){
						if (data == "Email Already Exist") {
							alert("this email has already been used by someone");
						}else if(data == "SOME ERROR"){
								alert("something is wroung")
						}else{
							window.location.href = encodeURI(DOMAIN+"/index.php?msg=You are Now Registerd Now you can login");
						}
					}
				})
		}else{
			pass2.addClass("border-danger");
			$("#p2_error").html(" Password does not match");
			status = true;
		}
	})

	//login
	$("#form_login").on("submit",function(){
		var email = $("#log_email");
		var pass = $("#log_pass");
		var status = false;

		if (email.val() == ) {
			email.addClass("border-danger");
			$("#e_error").html("<span class='txet-danger'>Please Enter email Address</span>");
			status = false;
		}else{
			email.removeClass("border-danger");
			$("#e_error").html("");
			status = true;
		}
		if (pass.val() == ) {
			pass.addClass("border-danger");
			$("#p_error").html("<span class='txet-danger'>Please Enter Password</span>");
			status = false;
		}else{
			pass.removeClass("border-danger");
			$("#p_error").html("");
			status = true;
		}
		if (status) {
			alert("ready");
		}
	})
})