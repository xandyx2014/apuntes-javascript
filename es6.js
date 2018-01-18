class Task
{
    constructor(name)
    {
        this.name=name;
        this.isComplete=false;
    }
    complete()
    {
        this.isComplete=!this.isComplete;
    }
}
class TaskList
{
    constructor(name)
    {
        this.name=name;
        this.tasks=[];
    }
    addTask(task,element)
    {
        this.tasks.push(task);
        this.renderTask(element);
    }
    removeTask(i,element)
    {
        this.tasks.splice(i,1);
        this.renderTask(element);
    }
    renderTask(element)
    {
        let task = this.tasks.map(task=>`
        <li class="task">
            <input type="checkbox" class="task__complete-buttom">
            <span class="task__name">${task.name}</span>
            <a href="#" class="task__remove-button">X</a>
         </li>           
        
        `);
        element.innerHtml= task.reduce((a,b)=>a+b);
    }
}

//trabajar con el Dom

const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox');
//añadir tarea desde el Dom
function addDOMTask(e, list = inbox)
{
    //obtener el texto del input
    //crear la tarea instanciando la clase
  
    // if (e.key=='Enter') {
    //     let task = new Task(this.value);
    //     list.addTask(task,taskContainerElement);

    // }
    console.log(e.key);
     //añadir la tarea a la lista
    
}
addTaskElement.addEventListener('keyup',addDOMTask);

 