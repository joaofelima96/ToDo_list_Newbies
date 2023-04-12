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