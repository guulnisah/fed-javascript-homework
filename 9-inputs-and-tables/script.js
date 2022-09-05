const submitBtn = document.getElementById('submit-button')
const tableData = document.querySelectorAll('.table-data')
const resetBtn = document.getElementById('reset-button')
const tbody = document.querySelector('tbody')
const inputs = document.querySelectorAll('input');
let allData = []

class User {
    constructor(name, surname, email, password) {
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
    }
}

submitBtn.addEventListener('click', () => {
    let userName = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let passwordRepeat = document.getElementById('password-repeat').value

    if (password !== passwordRepeat) {
        alert("Passwords don't match")
    } else if (!userName || !surname || !email || !password) {
        alert('One of the fields is empty!')
    } else {
        let newUser = new User(userName, surname, email, password)
        allData.push(newUser)
        tbody.innerHTML = ''
        updateTable(allData)
        for (let input of inputs) {
            input.value = ''
        }
    }
})

function updateTable(arr) {
    arr.forEach((elem) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td class="table-data">${elem.name}</td>
        <td class="table-data">${elem.surname}</td>
        <td class="table-data">${elem.email}</td>
        <td class="table-data">${elem.password}</td>
        `
        tbody.append(tr)
    })
}

resetBtn.addEventListener('click', () => {
    allData = []
    tbody.innerHTML = ''
})