//Tasks
// localStorage.setItem('Tasks', "hello")
// console.log(JSON.parse(localStorage.getItem('tasks'))[1]);
// localStorage.removeItem("Tasks")
// tasks = [{title:"task 1"}, {title: "task 2"}]
// localStorage.setItem("tasks", JSON.stringify(tasks))

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
            title : this.elements.taskTitle.value,
            content: this.elements.taskContent.value,
            dueDate: this.elements.taskDueDate.value,
            status: false,
            id: Date.now()
        }
        addTask(task)
        this.reset()
        window.location.replace("index.html");
    
    })
    
}

const showTasks = (tasks) =>{
    tasks.forEach( task => {
        let tr = document.createElement("tr")
        tbody.appendChild(tr)
        td = document.createElement("td")
        tr.appendChild(td)
        td.textContent= task.id      
        td = document.createElement("td")
        tr.appendChild(td)
        td.textContent= task.title     
        td = document.createElement("td")
        tr.appendChild(td)
        td.textContent= task.content     
        td = document.createElement("td")
        tr.appendChild(td)
        td.textContent= task.status      
        td = document.createElement("td")
        tr.appendChild(td)
        td.textContent= task.dueDate
        td = document.createElement("td")
        tr.appendChild(td)
        delBtn = document.createElement("button")       
        delBtn.textContent="delete"
        delBtn.classList = "btn btn-danger mx-2"
        td.appendChild(delBtn) 
        delBtn = document.createElement("button")       
        delBtn.textContent="show"
        delBtn.classList = "btn btn-primary mx-2"
        td.appendChild(delBtn) 
        delBtn = document.createElement("button")       
        delBtn.textContent="edit"
        delBtn.classList = "btn btn-warning mx-2"
        td.appendChild(delBtn) 
    })
}

if(tbody){
    let data = readLocalStaorageData()
    showTasks(data)
}

