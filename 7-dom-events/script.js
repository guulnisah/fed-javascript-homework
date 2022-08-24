const addBtn = document.getElementById('push')
const taskInput = document.getElementById('taskInput')
const list = document.getElementById('tasks')

addBtn.setAttribute('disabled', '')

taskInput.addEventListener('keyup', (e) => {
    if (taskInput.value) {
        addBtn.removeAttribute('disabled', '')
        if (e.key === 'Enter') {
            addTask()
        }
    }
    else { addBtn.setAttribute('disabled', '') }
})


addBtn.addEventListener('click', () => {
    addTask()
})

function addTask() {

    const task = taskInput.value

    const newTask = document.createElement('div')
    newTask.classList.add('task')

    newTask.innerHTML = `
    <div class="actions">
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="complete">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
   `
    const input = document.createElement('input')
    newTask.prepend(input)
    input.value = task
    input.setAttribute('type', 'text')
    input.setAttribute('readonly', '')
    input.classList.add('task-text')

    list.appendChild(newTask)

    const editBtn = newTask.querySelector('.edit')
    editBtn.addEventListener('click', () => {
        editTask(editBtn)
    })

    const completeBtn = newTask.querySelector('.complete')
    completeBtn.addEventListener('click', () => {
        completeTask(newTask)
    })

    const deleteBtn = newTask.querySelector('.delete')
    deleteBtn.addEventListener('click', () => {
        if (confirm("are you sure?")) {
            deleteTask(deleteBtn)
        }
    })

    taskInput.value = ""
    addBtn.setAttribute('disabled', '')
}

function deleteTask(elem) {
    elem.parentElement.parentElement.remove()
}

let completeToggle = false
function completeTask(elem) {
    completeToggle = !completeToggle
    const task = elem.firstChild
    task.style.textDecoration = completeToggle ? 'line-through' : 'none'
}

let editToggle = false
function editTask(elem) {
    editToggle = !editToggle
    const inputText = elem.parentElement.parentElement.querySelector('input')
    if (editToggle) {
        inputText.removeAttribute('readonly', '')
        inputText.focus()
        elem.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`
    } else {
        inputText.setAttribute('readonly', '')
        elem.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
    }
}