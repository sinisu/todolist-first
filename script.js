let userInput=document.getElementById("user-input")
let addButton=document.getElementById("add-button")
let todolist=[]

addButton.addEventListener("click",addlist)

function addlist(){
    let taskItem={
        id:randomIDGenerate(),
        taskContent: userInput.value,
        isComplete:false,
    }
    todolist.push(taskItem);
    console.log(todolist);
    render();
}

function render(){
    let resultHTML="";
    for(let i=0;i<todolist.length;i++){
        if(todolist[i].isComplete==true){
            resultHTML +=`<div class="task-list">
        <div class="task-done">${todolist[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${todolist[i].id}')">check</button>
            <button>delete</button>
        </div>
    </div>`
        } else{
            resultHTML +=`<div class="task-list">
        <div>${todolist[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${todolist[i].id}')">check</button>
            <button>delete</button>
        </div>
    </div>`;
        }

        

    }

    document.getElementById("task-content").innerHTML=resultHTML;
}

function toggleComplete(id){
    console.log("id:",id)
    for(let i=0;i<todolist.length;i++){
        if(todolist[i].id==id){
            todolist[i].isComplete= !todolist[i].isComplete
            break;
        }
    }
    render();
    console.log(todolist);
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}