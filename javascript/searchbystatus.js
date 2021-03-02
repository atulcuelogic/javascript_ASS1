window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("complete").addEventListener("click",statusA)
    document.getElementById("pending").addEventListener("click",statusA)
    document.getElementById("all").addEventListener("click",statusA)

});



function statusA(){
    var search=  document.querySelector('input[name="statusSearch"]:checked').value;
    var filteredtodolist=JSON.parse(localStorage.getItem("lasttodo"));
    var activeUser=localStorage.getItem('activeUser');
    if(search=="all"){
        
        var rowshtml='';
         const newLocal = filteredtodolist.length;
        for (var i=0;i<newLocal;i++){
            
            if(filteredtodolist[i].userid==activeUser){
               
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
     }
    else if(search=="completed"){
       
        var rowshtml='';
         const newLocal = filteredtodolist.length;
         
        for (var i=0;i<newLocal;i++){
            
            if(filteredtodolist[i].isDone==true && filteredtodolist[i].userid==activeUser)
            {
              
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
          
     }
     else if(search=="pending"){
       
        var rowshtml='';
         const newLocal_1 = filteredtodolist.length;
        for (var i=0;i<newLocal_1;i++){
            if(filteredtodolist[i].isDone==false && filteredtodolist[i].userid==activeUser)
            {
              
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
          
     }
     var tableRef = document.getElementById('todoTbl').getElementsByTagName('tbody')[0];
     tableRef.innerHTML=rowshtml;

      }

 