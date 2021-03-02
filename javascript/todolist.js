window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("createTodo").addEventListener("click",createToDo);

    var today = new Date().toISOString().split('T')[0];
    document.getElementById("todoStartDate").setAttribute('min', today);
    document.getElementById("reminderDate").setAttribute('min', today);
})
 
function createToDo(){
   
    var lasttodoid=Number(localStorage.getItem("lasttodoid"));
    var useridd=localStorage.getItem('activeUser');
    var isReminder=document.querySelector('input[name="reminder"]:checked').value;

    var reminderDate;
    if(isReminder=='yes'){
        reminderDate=document.getElementById("reminderDate").value;
    }
    else{
        
        reminderDate='';
    }
    var selected_Categories=document.querySelectorAll('input[name="todoCategory"]:checked');
    var catVals = [];
     for(var i = 0; i < selected_Categories.length; i++)
     {
        catVals.push(selected_Categories[i].value);
     }
    var new_todo={
       
        userid:useridd,
        id:(lasttodoid+1),
        title:document.getElementById("todoTitle").value,
        targetDate:document.getElementById("todoStartDate").value,
        isDone:false,
        isPublic:document.querySelector('input[name="public"]:checked').value,
        reminderDate:reminderDate,
        categories:catVals,
    }
    if(validatetodoform(new_todo)){

      var todos=JSON.parse(localStorage.getItem('lasttodo'));
      if(!todos){
        todos=[];
    }
      todos.push(new_todo);
      
        localStorage.setItem('lasttodo',JSON.stringify(todos));
        localStorage.setItem('lasttodoid',JSON.stringify(lasttodoid+1));
        alert("Task added succesfully!")
        window.location.href="homepage.html";
        
    }
};

function validatetodoform(new_todo){
    var isFormValid = true;
    if(new_todo.title==""){
        isFormValid=false;
        document.getElementById("title_err").innerHTML="Please enter todo title";
    }
    if(!new_todo.targetDate){
        isFormValid=false;
        document.getElementById("startdate_err").innerHTML="Please enter/select date";
    }
    else if(!validatedate(new_todo.targetDate)){
        isFormValid=false;
        document.getElementById("startdate_err").innerHTML=" Date must be current or future date only";
    }
    var isReminder=document.querySelector('input[name="reminder"]:checked').value
    if(isReminder=='yes'){
        if(!new_todo.reminderDate){
            isFormValid=false;
            document.getElementById("reminderdate_err").innerHTML="Please enter/select date";
        }
        else if(!validateReminderDate(new_todo.reminderDate,new_todo.targetDate)){
            isFormValid=false;
            document.getElementById("reminderdate_err").innerHTML="invalid reminder date !!!";
        }
    }
    if(!new_todo.categories || new_todo.categories.length==0){
        isFormValid=false;
         document.getElementById("categories_err").innerHTML=
         "Please select category";
    }
    
    return isFormValid;
}

function validatedate(targetdate){
    var today=new Date();
    today.setHours(0, 0, 0, 0); 
    if(stringToDate(targetdate,"yyyy-mm-dd","-") < today){
        return false;
    }
    return true;
}
function validateReminderDate(targetdate,sdate){
    if(targetdate < sdate){
        return false;
    }
    return true;
}
function stringToDate(_date,_format,_delimiter)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            formatedDate.setHours(0, 0, 0, 0)
            return formatedDate;
}
