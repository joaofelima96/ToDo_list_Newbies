function uid() {
    return Date.now().toString(16) + Math.random().toString(16).substring(2);
}

let taskData = [
    {
        id: uid(),
        name: 'Ver se eu to na esquina',
        toDo: true,
    },
    {
        id: uid(),
        name: 'Terminar as aulas de FrontEnd',
        toDo: false,
    }
]

// capturando os elementos por um id para utilizar no JS
const addTaskInput = document.getElementById("task_input");
// capturando os elementos pelo nome da tag para utilizar no JS
// como a captura é feita pelo nome da tag, o jS pega um conjunto de elementos
// a notação de array no fim da linha de código abaixo, serve para identificar qual será o elemento utilizado
// nesse caso, só temos um botão, então, ele consequentemente está no índice 0
const addTaskButton = document.getElementsByTagName("button")[0];
const taskList = document.getElementById("tasks_list");

// create new task element

function createNewTaskEL(taskName, taskId) {
    // create task li
    let task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("todo");
    task.setAttribute("id", taskId);

    // create .left_content div
    let leftContent = document.createElement("div");
    leftContent.classList.add("left_content");

    // todo icon
    let todoIcon = document.createElement("i");
    todoIcon.classList.add("ph-duotone");
    todoIcon.classList.add("ph-circle-dashed");
    todoIcon.classList.add("check_btn");
    todoIcon.addEventListener("click", completeTask);

    // done icon
    // task name / p
    // delete icon
}

// add new task
function addTask(event) {
    event.preventDefault();
    console.log('Add task');

    const newTaskName = addTaskInput.value;

    let newTask = {
        id: uid(),
        name: newTaskName,
        toDo: true,
    }

    taskData.push(newTask);
}

// complete task
function completeTask(event) {
    console.log('Complete task');
}

// incomplete task
function incompleteTask(event) {
    console.log('Incomplete Task');
}

// delete task
function deleteTask(event) {
    console.log('Delete Task');
}
// sync html with taskDataList

//counter task