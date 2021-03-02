window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("loginUser").addEventListener("click",validate);

	var input = document.getElementById("pass");
	input.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	   event.preventDefault();
	   validate();
	  }

	});
});

function validate(){
       
	let email = document.getElementById('mailid').value;
	let password = document.getElementById('pass').value;	
	let u = JSON.parse(localStorage.getItem('users_data'));
	

        var flag=true;
		if(email=="" && password==""){
			document.getElementById("passworderror").innerHTML="Enter Email & Password";
			flag=false;
		  
		}
		else if(email==""){
			document.getElementById("mailerror").innerHTML="Please Enter Email";
			flag=false;
		  
		}
		else if(password==""){
			document.getElementById("passworderror").innerHTML="Please Enter Password";
			flag=false;
		}else if(u==null){
			alert("No registered User present!! kindly register..");
			window.location.href="pages/registration-page.html";
		}

   if(flag){
	for (var i = 0; i < u.length; i++) {
		var user=false;
		if(u[i].emailid == email && u[i].password == password)
		{
			alert("Login Successfully");
			localStorage.setItem('activeUser',email);
			window.location.href="pages/homepage.html";	
			user=true;
			break;
		 }
		 else if(u[i].emailid == email && u[i].password != password){
             alert("password not matching !");
			 user=true;
			 break;
		 }
	}
	
	if(!user){
		alert("not a registered User!! kindly regsiter to login");
		window.location.href="pages/registration-page.html";
	}
}
}

