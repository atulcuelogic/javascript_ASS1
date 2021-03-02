window.addEventListener("DOMContentLoaded",function(){
var input = document.getElementById("titlesearch");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   searchbytitle();
  }

});
});


function searchbytitle(){
  
        var searchText=document.getElementById('titlesearch').value;
       
        var todoList=JSON.parse(localStorage.getItem("lasttodo"));
        var filteredtodolist=JSON.parse(localStorage.getItem("lasttodo"));
        var flag=false;
          var rowshtml='';
              for (var i=0;i<filteredtodolist.length;i++){
                  if(filteredtodolist[i].title == searchText){
                      flag=true;
                  rowshtml+=`<tr>
                  <td style="text-align:center"><input type="checkbox" data-id="${filteredtodolist[i].id}" name="chkdeletetodo" /></td>
                  <td>${(filteredtodolist[i].isDone)?"<del>"+filteredtodolist[i].title+"</del>":filteredtodolist[i].title}</td>
                  <td>${filteredtodolist[i].targetDate}</td>
                  <td>${(filteredtodolist[i].isDone)?"<text style='color:green;'><b>Completed</b></text>":"<text style='color:red;'><b>Pending</b></text>"}</td>
                  <td>${( Date.parse(filteredtodolist[i].reminderDate)< new Date())?"Yes":"No"}</td>
                  <td>${filteredtodolist[i].categories.join(',')}</td>
                  <td><button type="button" class="text-success" onclick="mark_complete(${filteredtodolist[i].id})">Mark as done</button></td>
                  <td style="display:none;">${filteredtodolist[i].reminderDate}</td>
                  </tr>`;
              }
            }
          
          if(!flag){
            rowshtml=`<tr>
            <td colspan="7" style="text-align:center; color:red;"><b>No todo by searched title </b></td>
            </tr>`;
          }
          var tableRef = document.getElementById('todoTbl').getElementsByTagName('tbody')[0];
          tableRef.innerHTML=rowshtml;
         
         
      }
