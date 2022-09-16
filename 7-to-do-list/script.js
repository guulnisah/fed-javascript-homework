let TODOS = JSON.parse(localStorage.getItem('todos')) || [];

window.addEventListener('load', () => {
    TODOS = JSON.parse(localStorage.getItem('todos')) || [];

    taskInput.addEventListener('keyup', (e) => {
        if (taskInput.value) {
            addBtn.removeAttribute('disabled', '')
            if (e.key === 'Enter') {
                createTask()
                displayTasks()
                taskInput.value = ''
                addBtn.setAttribute('disabled', '')
            }
        }
        else { addBtn.setAttribute('disabled', '') }
    })

    addBtn.addEventListener('click', () => {
        createTask()
        displayTasks()
        taskInput.value = ''
        addBtn.setAttribute('disabled', '')
    })

    displayTasks()
})



const addBtn = document.getElementById('push')
const taskInput = document.getElementById('taskInput')
const list = document.getElementById('tasks')

addBtn.setAttribute('disabled', '')


class ToDo {
    constructor(value, checked) {
        this.value = value
        this.checked = checked
    }
}

function createTask() {
    const todo = new ToDo(taskInput.value, false)
    TODOS.push(todo)
    localStorage.setItem('todos', JSON.stringify(TODOS));
}

function displayTasks() {
    list.innerHTML = ''
    TODOS.forEach(todo => {
        const newTask = document.createElement('div')
        newTask.classList.add('task')

        const input = document.createElement('input')
        input.value = todo.value
        input.setAttribute('type', 'text')
        input.setAttribute('readonly', '')
        input.classList.add('task-value')
        newTask.prepend(input)


        const checkBtn = document.createElement('button')
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
        const actions = document.createElement('div')
        actions.classList.add('actions')
        actions.append(checkBtn)
        actions.append(deleteBtn)
        newTask.append(actions)


        list.appendChild(newTask)

        if (todo.checked) {
            input.classList.add('checked')
        } else { input.classList.remove('checked') }

        checkBtn.addEventListener('click', () => {
            todo.checked = !todo.checked
            localStorage.setItem('todos', JSON.stringify(TODOS));
            if (todo.checked) {
                input.classList.add('checked')
            } else { input.classList.remove('checked') }
        })


        deleteBtn.addEventListener('click', () => {
            if (confirm("are you sure?")) {
                TODOS = TODOS.filter(elem => elem != todo); //??? use splice fro this maybe 
                localStorage.setItem('todos', JSON.stringify(TODOS));
                displayTasks()
            }
        })
    })
}