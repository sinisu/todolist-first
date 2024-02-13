let userInput=document.getElementById("user-input")
let addButton=document.getElementById("add-button")
let todolist=[]

addButton.addEventListener("click",addlist)

function addlist(){
    let taskContent=userInput.value
    todolist.push(taskContent);
    console.log(todolist);
    render();
}

function render(){
    let resultHTML="";
    for(let i=0;i<todolist.length;i++){
        resultHTML +=`<div class="task-list">
        <div>${todolist[i]}</div>
        <div>
            <button>check</button>
            <button>delete</button>
        </div>
    </div>`;

    }

    document.getElementById("task-content").innerHTML=resultHTML;
}

