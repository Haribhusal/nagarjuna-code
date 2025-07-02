let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let taskForm = document.getElementById('taskForm')
let taskInput = document.getElementById('taskInput')
let tasksList = document.getElementById('taskList')

function renderTasks() {
    tasksList.innerHTML = ''
    tasks.forEach((item, index) => {
        let li = document.createElement('li')
        li.innerHTML = `
        <div class="item">
                    <span>
                        ${item}
                    </span>
                    <div class="actions">
                        <button>Edit</button>
                        <button onclick="deleteTask(${index})">
                        Delete</button>
                    </div>
                </div>
        `
        tasksList.appendChild(li)
    })

}

taskForm.onsubmit = function (e) {
    e.preventDefault();
    console.log("hello")
    let task = taskInput.value.trim();
    console.log(task)

    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = ''

        renderTasks();

    }
}

function deleteTask(index) {
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks()
}

renderTasks();