
function deletetodos(){
    var todolist=JSON.parse(localStorage.getItem("lasttodo"));
    var newtodolist=todolist;
    
    var table = document.getElementById("todoTbl");
    var checkBoxes = table.getElementsByTagName("INPUT");
    var count=0;
    for (var i = 0; i < checkBoxes.length; i++){ 
      if(checkBoxes[i].checked){
        count+=1;
      }
    }
      if(count==0){
        alert("select task to delete");
      }
    else if(todolist.length==0)
    {
      alert("nothing to delete");
    }
  
    else{
      var r = confirm("Are you sure delete!!");
      if (r == true) {
          var table = document.getElementById("todoTbl");
          var checkBoxes = table.getElementsByTagName("INPUT");
          for (var i = 0; i < checkBoxes.length; i++) {
              if (checkBoxes[i].checked) {
                  var id = checkBoxes[i].getAttribute("data-id");
                  newtodolist=newtodolist.filter(function(value, index, arr){ return value.id != id;});
              }
          }
        
          }
          localStorage.setItem("lasttodo",JSON.stringify(newtodolist));
          window.location="homepage.html";
      } 
  };
  
  