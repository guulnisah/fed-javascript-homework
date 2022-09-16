const params = new URLSearchParams(location.search)
const post = document.getElementById('post')
const comments = document.getElementById('comments')

const deletePostBtn = document.querySelector('#delete-post')

deletePostBtn.addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.get('id')}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) { alert('The post is deleted! Going back to main page.') }
        })
        setTimeout(function () {
            window.history.back()
        }, 3000);
    }
})


displayPosts(getPosts())
displayComments(getComments())


async function getPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.get('id')}`)
    const data = await response.json()
    return data
}

async function getComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.get('id')}/comments`)
    const data = await response.json()
    return data
}

function displayPosts(data) {
    data.then(data => {
        post.innerHTML = `
            <h1>${data.title}</h1>
            <p>${data.body}</p>
          `
    })
}

function displayComments(data) {
    data.then((data) => {
        data.forEach((elem) => {
            const div = document.createElement('div')
            div.innerHTML = `
                <div>
                <img src="../images/user-portrait.png"/>
                </div>
                <div>
                <h3> ${elem.name} </h3>
                <a href = "mailto: ${elem.email}"> ${elem.email} </a>
                <p> ${elem.body} </p>
                </div>`
            div.classList.add('comment')
            comments.append(div)
        })
    })
}

const editPostBtn = document.querySelector('#edit-post')
editPostBtn.innerHTML = `<a href="/posts/edit/?id=${params.get('id')}">Edit this post</a>`
