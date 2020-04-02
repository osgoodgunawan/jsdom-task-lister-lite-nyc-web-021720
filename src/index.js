

// const form = document.getElementById("create-task-form");

// const ul= document.querySelector("#tasks")

// const newtask=document.createElement("li")

// document.addEventListener("DOMContentLoaded",() => {
  
  
//   form.addEventListener("submit", function(event){


//   event.preventDefault()


//   // console.log(event.target)
//   // console.log(event.target.form[2])

//   if ( event.target === form ){
//     console.log(event.target.childNodes)
//    return  ul.innerHTML+= `<li>${event.target.childNodes[3].value}
//    <button type="submit"  data-description=${event.target.childNodes[3].value}>X</button>
//    </li>`;

//   }


// });

// ul.addEventListener("click",function(event){
//   console.log(event.target.parentNode)
//   return event.target.parentNode.remove()
// });


// });




const form=document.getElementById("create-task-form")

form.addEventListener("submit",function(e){

    e.preventDefault();

    const list=document.getElementById("tasks");
    const userInput=document.querySelector("#new-task-description").value

    if(userInput.length>0){

    const task=document.createElement('li')
    
    task.innerText=userInput

// Delete Button
    const deleteButton=document.createElement("button")
    deleteButton.innerText= "X" ;
    deleteButton.className="delete_button"

    task.append(deleteButton)

    deleteButton.onclick=function (e){
        deleteButton.parentNode.remove()
    }


    // Drop down selection 
    const prioritySelect=document.createElement("select")

    const highPriority=document.createElement("option")
    
    highPriority.innerText="High"
    highPriority.value="red"
    
    prioritySelect.append(highPriority)
    
    const lowPriority=document.createElement("option")
    
    lowPriority.innerText="Low"
    lowPriority.value="green"
    
    prioritySelect.append(lowPriority)

    task.append(prioritySelect)

    prioritySelect.addEventListener('change',function(e){
            task.style.color=e.target.value
    });

    
    list.append(task)

    // document.getElementById('new-task-description').value = ''
    form.reset();

}

});


// document.addEventListener("click", function(e){

//     if (e.target.className==="delete_button"){
//     e.target.parentNode.romove()
//     }
// });