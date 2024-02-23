function AddTask(){
    var input=document.querySelector('input')
    console.log(input.value)
    var element=document.getElementById('taskcontainer')
    console.log(element)
    var newElement= document.createElement('div')
    newElement.setAttribute('class',"ind-task")
    newElement.innerHTML=<p>${input.value}</p><button onclick="DeleteTask(this)">Delete</button>
    element.append(newElement)
    
}
function DeleteTask(button) {
    button.parentNode.remove();
}