
window.addEventListener("DOMContentLoaded",function(){
    if (localStorage.getItem("activeUser") === null) {
        window.location='../login.html';
      }
     
      var loggedinuser=localStorage.getItem("activeUser");
      var todoList=JSON.parse(localStorage.getItem("lasttodo"));

     
          var rowshtml='';
          if(todoList && todoList.length>0 ){
            for (var i=0;i<todoList.length;i++){

              if(todoList[i].userid==loggedinuser){
                rowshtml+=`<tr>
                <td style="text-align:center"><input type="checkbox" data-id="${todoList[i].id}" name="chkdeletetodo" /></td>
                <td>${(todoList[i].isDone)?"<del>"+todoList[i].title+"</del>":todoList[i].title}</td>
                <td>${todoList[i].targetDate}</td>
                <td>${(todoList[i].isDone)?"<text style='color:green;'><b>Completed</b></text>":"<text style='color:red;'><b>Pending</b></text>"}</td>
                <td>${( Date.parse(todoList[i].reminderDate)< new Date())?"Yes":"No"}</td>
                <td>${todoList[i].categories.join(',')}</td>
                <td><button type="button" class="text-success" onclick="mark_completee(${todoList[i].id})">Mark as done</button></td>
                  </tr>`;
              } else{
            rowshtml=`<tr>
               
            </tr>`;
            
          }
        }
      }
          var tableRef = document.getElementById('todoTbl').getElementsByTagName('tbody')[0];
          tableRef.innerHTML=rowshtml;
        


            
});

function mark_completee(todoid){
   
   var todolist=JSON.parse(localStorage.getItem("lasttodo"));
  for(var i=0;i<todolist.length;i++){
      if(todolist[i].id==todoid){
          todolist[i].isDone=true;
          break;
      }
      
  }
  localStorage.setItem("lasttodo",JSON.stringify(todolist));
  window.location="homepage.html";
}

function searchByDate(){
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
    
   var todoList=JSON.parse(localStorage.getItem("lasttodo"));
  
  if(startDate == "" && endDate == ""){
    document.getElementById("startdaterr").innerHTML = "please select start date and end date";
  }
  else if(startDate == ""){
    document.getElementById("startdaterr").innerHTML = "please select start date";
    }
  else if(endDate == ""){
    document.getElementById("startdaterr").innerHTML = "please select end date";
    }
  else if(Date.parse(startDate)>=Date.parse(endDate)){
    document.getElementById("startdaterr").innerHTML = "Start date should be less then end date";
   }

    var rowshtml='';
  if(todoList && todoList.length>0){
      for (var i=0;i<todoList.length;i++){
        if(Date.parse(todoList[i].targetDate)>Date.parse(startDate) && Date.parse(todoList[i].targetDate)<Date.parse(endDate))
          rowshtml+=`<tr>
          <td style="text-align:center"><input type="checkbox" data-id="${todoList[i].id}" name="chkdeletetodo" /></td>
          <td>${(todoList[i].isDone)?"<del>"+todoList[i].title+"</del>":todoList[i].title}</td>
          <td>${todoList[i].targetDate}</td>
          <td>${(todoList[i].isDone)?"<text style='color:green;'><b>Completed</b></text>":"<text style='color:red;'><b>Pending</b></text>"}</td>
          <td>${( Date.parse(todoList[i].reminderDate)< new Date())?"Yes":"No"}</td>
          <td>${todoList[i].categories.join(',')}</td>
          <td><button type="button" class="text-success" onclick="mark_completee(${todoList[i].id})">Mark as done</button></td>
         
          <td style="display:none;">${todoList[i].reminderDate}</td>
          </tr>`;
      }
      
  }
  if(rowshtml.length==0){
    rowshtml=`<tr>
    <td colspan="7" style="text-align:center"><b>No records to display</b></td>
    </tr>`;
  }
  var tableRef = document.getElementById('todoTbl').getElementsByTagName('tbody')[0];
  tableRef.innerHTML=rowshtml;
}