window.addEventListener("DOMContentLoaded",function(){

    let userObj={};
	let loggedInUser = JSON.parse(localStorage.getItem('users_data'));
	let activeUser = localStorage.getItem('activeUser');
	let flag = false;
	for (var i = 0; i < loggedInUser.length; i++) {
		if(loggedInUser[i].emailid=== activeUser)
		{
			userObj = loggedInUser[i];
			flag=true;
			break;
		}
	}
    
    if(flag){
        document.getElementById("firstname").value=userObj.firstname;
        document.getElementById("lastname").value=userObj.lastname;
        document.getElementById("emailid").value=userObj.emailid;
        document.getElementById("address").value=userObj.address;
        document.getElementById("imgprofile").src=userObj.profileimg; 
   
    }
    else{
        alert('please login!!!')
        window.location="login.html";

    }

    document.getElementById("update").addEventListener("click",UpdateUser)
});

function getImage() {
    var input = document.getElementById("profileimg");
    var imagereader = new FileReader();
    imagereader.readAsDataURL(input.files[0]);
    imagereader.onloadend = function(event) {
        var profileImage = document.getElementById("profileimg");
        profileImage.src = event.target.result;
       
    }
}

function UpdateUser(){
  
        var userList=JSON.parse(localStorage.getItem('users_data'));
        let activeUser = localStorage.getItem('activeUser');
        for(var i=0;i<userList.length;i++){
            if(userList[i].emailid===activeUser){
                userList[i].firstname=document.getElementById("firstname").value,
                userList[i].lastname=document.getElementById("lastname").value,
                userList[i].address=document.getElementById("address").value,
                userList[i].profileimg=document.getElementById("profileimg").value,
                localStorage.setItem("users_data",JSON.stringify(userList));
                break;
            }
        }
        alert("User profile updated succesfully");
        window.location="homepage.html";
        
    };