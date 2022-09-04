const submitBtn = document.getElementById('submit-button')
const tableData = document.querySelectorAll('.table-data')
const resetBtn = document.getElementById('reset-button')
const tbody = document.querySelector('tbody')

let allData = []

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.setAttribute('required', '')
})

class User {
    constructor(name, surname, email, password) {
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let userName = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let passwordRepeat = document.getElementById('password-repeat').value

    if (password !== passwordRepeat) {
        alert("Passwords don't match")
    } else {
        let newUser = new User(userName, surname, email, password)
        allData.push(newUser)
        console.log(allData)
        tbody.innerHTML = ''

        for (let input of inputs) {
            input.value = ''
        }

        allData.forEach((elem) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td class="table-data">${elem.name}</td>
            <td class="table-data">${elem.surname}</td>
            <td class="table-data">${elem.email}</td>
            <td class="table-data">${elem.password}</td>
            `
            tbody.appendChild(tr)
        })

    }
})

resetBtn.addEventListener('click', () => {
    allData = []
    tbody.innerHTML = ''
})