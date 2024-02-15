let userInput=document.getElementById("user-input")
let addButton=document.getElementById("add-button")
let taskMenu=document.querySelectorAll(".task-menu div")
let underLine=document.getElementById("under-line")
let todolist=[]
let mode='all'
let filterList = []
let List=[];

addButton.addEventListener("click",addlist)
userInput.addEventListener("focus",blankfield)
taskMenu.forEach(menu=>menu.addEventListener("click",(e)=>underLineIndicator(e)))

userInput.addEventListener("keypress", function(enter) {
    if (enter.key === "Enter") {
      enter.preventDefault();
      document.getElementById("add-button").click();
    }
  });


for(let i=1;i<taskMenu.length;i++){
    taskMenu[i].addEventListener("click",function (event){
        filter(event);
    });
}

console.log(taskMenu);

function blankfield(){
    userInput.value="";
}

function addlist(){
    if(userInput.value==""){
        userInput.value="내용을 입력하세요"
        return;
    } else if(userInput.value=="내용을 입력하세요"){
        return;
    }
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
    if(mode==="all"){
        List=todolist;
    } else if(mode==="ongoing"||mode==="finish"){
        List=filterList;
    }
    let resultHTML="";
    for(let i=0;i<List.length;i++){
        if(List[i].isComplete==true){
            resultHTML +=`<div class="task-list done-box">
                <div class="taskbox1">
                    <button onclick="toggleComplete('${List[i].id}')"><i class="fa-solid fa-plus"></i></button>
                    <div class="task-done">${List[i].taskContent}</div>
                </div>
                <div>
                    <button onclick="deleteTask('${List[i].id}')"><i class="fa-solid fa-minus"></i></button>
                </div>
            </div>`
        } else{
            resultHTML +=`<div class="task-list ready-box">
            <div class="taskbox1">
                <button onclick="toggleComplete('${List[i].id}')"><i class="fa-solid fa-check"></i></button>
                <div>${List[i].taskContent}</div>
            </div>
            <div>
                <button onclick="deleteTask('${List[i].id}')"><i class="fa-solid fa-minus"></i></button>
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
            
        }
    }
    filter();
    console.log(todolist)
}

function filter(event){
    if(event){
        mode=event.target.id;   
    }
    
    filterList = []
    if(mode==="all"){
        render();
    } else if(mode==="ongoing"){
        for(let i=0;i<todolist.length;i++){
            if(todolist[i].isComplete===false){
                filterList.push(todolist[i])
            }
        }
        render();
        console.log("진행중",filterList);
    } else if(mode==="finish"){
        for(let i=0;i<todolist.length;i++){
            if(todolist[i].isComplete===true){
                filterList.push(todolist[i])
            }
        }
        render();
    }
}

function underLineIndicator(e) {
    underLine.style.left=e.currentTarget.offsetLeft+"px";
    underLine.style.width=e.currentTarget.offsetWidth+"px";
    underLine.style.top=e.currentTarget.offsetTop+e.currentTarget.offsetHeight+"px";
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}