
window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("register").addEventListener("click",add);
});

function User(firstname,lastname,gender,password,address,emailid,confirmpass,profileimg){
	this.firstname=firstname;
	this.lastname=lastname;
	this.gender=gender;
	this.password=password;
	this.address=address;
    this.emailid=emailid;
    this.confirmpass=confirmpass;
    this.profileimg=profileimg;
}
function add()
{   var isFormValid = true;

	let firstname=document.getElementById("firstname").value;
    if(firstname==""|| firstname==null){
        isFormValid=false;
        document.getElementById("firsterror").innerHTML = "Please enter first name";
        
    }

	let lastname=document.getElementById("lastname").value;
    if(lastname=="" || lastname==null){
        isFormValid=false;
        document.getElementById("lasterror").innerHTML = "Please enter last name";
    }

	let address=document.getElementById("address").value;
    if(address=="" || address==null){
        isFormValid=false;
        document.getElementById("adderror").innerHTML = "Please enter your address"
    }

    let emailid=document.getElementById("emailid").value;
    if(emailid==''){
        isFormValid=false;
        document.getElementById("mailerror").innerHTML = "Please enter your email";
    }

	let password=document.getElementById("password").value;
    if(password=='' || password<6){
        isFormValid=false;
        document.getElementById("passerror").innerHTML = "enter password atleast 6 digits";
    }

	let confirmpass=document.getElementById("confirmpass").value;
    if(password != confirmpass ||confirmpass==''){
        isFormValid=false;
        document.getElementById("cpasserror").innerHTML = "mismatch";
    }
	let gender;
	if (document.getElementById('redio1').checked) {
 	 gender = document.getElementById('redio1').value;
	}else if (document.getElementById('redio2').checked) {
 	 gender = document.getElementById('redio2').value;
	}
    let profileimg =document.getElementById('profileimg').src;
    
   
    
    if(document.getElementById("profileimg").value==""){
        isFormValid=false;
        document.getElementById("proerror").innerHTML = "upload profile photo";
    }
    else if(!isImageValid()){
        
        isFormValid=false;
        document.getElementById("proerror").innerHTML = "Only Images Accepted";
    }

    function isImageValid(){
        var imgFilter= /.(gif|jpe|jpeg|JPG|JPEG|PNG|png|webp|bmp)$/i;
     
        return(imgFilter.test(document.getElementById("profileimg").value));

    }
 
    if(isFormValid)
    {
       
	let new_user=new User(firstname,lastname,gender,password,address,emailid,confirmpass,profileimg);

		var users_data = JSON.parse(localStorage.getItem('users_data'));
        if(!users_data){
            users_data=[];
        }
		users_data.push(new_user);
		localStorage.setItem("users_data",JSON.stringify(users_data));
		alert("Registration Successful..Kindly login");
		window.location.href="../login.html";	
    }
    else{
        alert("!!! fill form correctly")
    }

}
function getImage() {
   
    var input = document.getElementById("profileimg");
    var imagereader = new FileReader();
    imagereader.readAsDataURL(input.files[0]);
    imagereader.onloadend = function(event) {
        var profileImage = document.getElementById("profileimg");
        profileImage.src = event.target.result;
       
    }
}