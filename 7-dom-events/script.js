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
        <button class="complete">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
</div>
   `
    const span = document.createElement('span')
    newTask.prepend(span)
    span.innerText = task

    list.appendChild(newTask)

    const deleteBtn = newTask.querySelector('.delete')

    deleteBtn.addEventListener('click', () => {
        if (confirm("are you sure?")) {
            deleteTask(deleteBtn)
        }
    })


    const completeBtn = newTask.querySelector('.complete')
    completeBtn.addEventListener('click', () => {
        completeTask(newTask)
    })

    taskInput.value = ""
    addBtn.setAttribute('disabled', '')
}

function deleteTask(elem) {
    elem.parentElement.parentElement.remove()
}

function completeTask(elem) {

    const smth = elem.firstChild
    console.log(smth)
    smth.style.textDecoration = 'line-through'
}
