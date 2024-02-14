let userInput=document.getElementById("user-input")
let addButton=document.getElementById("add-button")
let todolist=[]

addButton.addEventListener("click",addlist)
userInput.addEventListener("focus",blankfield)

function blankfield(){
    userInput.value="";
}

function addlist(){
    let taskItem={
        id:randomIDGenerate(),
        taskContent: userInput.value,
        isComplete:false,
    }
    todolist.push(taskItem);
    console.log(todolist);
    blankfield();
    render();
}

function render(){
    let resultHTML="";
    for(let i=0;i<todolist.length;i++){
        if(todolist[i].isComplete==true){
            resultHTML +=`<div class="task-list done-box">
                <div class="taskbox1">
                    <button onclick="toggleComplete('${todolist[i].id}')"><i class="fa-solid fa-plus"></i></button>
                    <div class="task-done">${todolist[i].taskContent}</div>
                </div>
                <div>
                    <button onclick="deleteTask('${todolist[i].id}')"><i class="fa-solid fa-minus"></i></button>
                </div>
            </div>`
        } else{
            resultHTML +=`<div class="task-list ready-box">
            <div class="taskbox1">
                <button onclick="toggleComplete('${todolist[i].id}')"><i class="fa-solid fa-check"></i></button>
                <div>${todolist[i].taskContent}</div>
            </div>
            <div>
                <button onclick="deleteTask('${todolist[i].id}')"><i class="fa-solid fa-minus"></i></button>
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

function deleteTask(id){
    console.log("delete",id)
    for(let i=0;i<todolist.length;i++){
        if(todolist[i].id==id){
            todolist.splice(i,1)
            break;
        }
    }
    render();
    console.log(todolist)
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}