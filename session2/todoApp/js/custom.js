const addTaskForm = document.querySelector("#addTask")
const tbody = document.querySelector("tbody")
const readLocalStaorageData = () =>{
    let data
    try{
        data = JSON.parse(localStorage.getItem('Tasks'))
        if(!data || !Array.isArray(data) ) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
const writeDataToLocalStorage = (data) =>{
    localStorage.setItem("Tasks", JSON.stringify(data))
}
const addTask = (task) =>{
    let data=readLocalStaorageData();
    data.push(task)
    writeDataToLocalStorage(data)
}
if(addTaskForm){
    addTaskForm.addEventListener('submit', function(e){
        e.preventDefault()
        const task = {
            id: Date.now(),
            title : this.elements.taskTitle.value,
            content: this.elements.taskContent.value,
            status: false,
            dueDate: this.elements.taskDueDate.value
        }
        addTask(task)
        this.reset()
        window.location.replace("index.html");
    
    })
    
}
const deleteEle = (i, tasks)=>{
    tasks.splice(i, 1)
    writeDataToLocalStorage(tasks)
    showTasks(tasks)
}
const createMyOwnElement = (parent, ele, txt=null, classes=null) =>{
    myElement = document.createElement(ele)
    parent.appendChild(myElement)
    if(txt) myElement.textContent = txt
    if(classes) myElement.classList=classes
    return myElement
}
const showTasks = (tasks) =>{
    tbody.textContent=""
    tasks.forEach( (task, i) => {
        const tr = createMyOwnElement(tbody, "tr")
        for(item in task) {
            if(item=="status") task[item] = task[item]? "done": "not finished";
            createMyOwnElement(tr, "td", task[item])
        }
        const td = createMyOwnElement(tr, "td")
        const delBtn = createMyOwnElement(td, "button","delete","btn btn-danger mx-2")
        delBtn.addEventListener("click", ()=> deleteEle(i, tasks))
        const showBtn = createMyOwnElement(td, "button", "show","btn btn-primary mx-2")
        showBtn.addEventListener("click", function(e){
            const single = document.querySelector("#single")
            single.classList.toggle("d-none")
            if(this.textContent=="show"){
                 this.textContent="hide"
                 single.textContent = task.title
             }
             else{
                 this.textContent="show"
             }
        })
        const editBtn = createMyOwnElement(td, "button", "edit", "btn btn-warning mx-2")
    })
}

if(tbody){
    let data = readLocalStaorageData()
    showTasks(data)
}

