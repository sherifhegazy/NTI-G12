//Tasks
// localStorage.setItem('Tasks', "hello")
// console.log(JSON.parse(localStorage.getItem('tasks'))[1]);
// localStorage.removeItem("Tasks")
// tasks = [{title:"task 1"}, {title: "task 2"}]
// localStorage.setItem("tasks", JSON.stringify(tasks))

const addTaskForm = document.querySelector("#addTask")

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



