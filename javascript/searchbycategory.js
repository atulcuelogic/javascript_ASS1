window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("home").addEventListener("click",category)
    document.getElementById("personal").addEventListener("click",category)
    document.getElementById("office").addEventListener("click",category)

});
 
 function category(){
   
       var selected_Categories=document.querySelectorAll('input[name="searchByCategory"]:checked');
       var categories = [];
       for(var i = 0; i < selected_Categories.length; i++)
       {
           categories.push(selected_Categories[i].value);
       }
     
       var loggedinuser=localStorage.getItem("activeUser");
       var todoList=JSON.parse(localStorage.getItem("lasttodo"));
       
     var filtered_list=[];
     if(categories.length>0 ){
       filtered_list=todoList.filter(function(value){ return value.categories.some(r=>categories.includes(r))});}
     else{ filtered_list=todoList;}
        
     var rowshtml='';
     if(filtered_list.length>0){
         for (var i=0;i<filtered_list.length;i++){
           if(filtered_list[i].userid == loggedinuser)
           {
             rowshtml+=`<tr>
             <td style="text-align:center"><input type="checkbox" data-id="${filtered_list[i].id}" name="chkdeletetodo" /></td>
             <td>${(filtered_list[i].isDone)?"<del>"+filtered_list[i].title+"</del>":filtered_list[i].title}</td>
             <td>${filtered_list[i].targetDate}</td>
             <td>${(filtered_list[i].isDone)?"<text style='color:green;'><b>Completed</b></text>":"<text style='color:red;'><b>Pending</b></text>"}</td>
             <td>${( Date.parse(todoList[i].reminderDate)< new Date())?"Yes":"No"}</td>
             <td>${filtered_list[i].categories.join(',')}</td>
             <td><button type="button" class="text-success" onclick="markasdone(${filtered_list[i].id})">Mark as done</button></td>
            <td style="display:none;">${todoList[i].reminderDate}</td>
             </tr>`;
         }
        }  
     }

     else{
       rowshtml=`<tr>
       <td colspan="7" style="text-align:center; color:red;"><b>No records</b></td>
       </tr>`;
     }
     var tableRef = document.getElementById('todoTbl').getElementsByTagName('tbody')[0];
     tableRef.innerHTML=rowshtml;

 }


