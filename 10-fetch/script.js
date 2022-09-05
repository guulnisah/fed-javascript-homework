const tbody = document.querySelector('tbody')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => { tableInfo(data) })

function tableInfo(data) {
    data.forEach((elem) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${elem.userId}</td>
        <td>${elem.id}</td>
        <td>${elem.title}</td>
        <td>${elem.body}</td>
        `
        tbody.append(tr)
    })
}