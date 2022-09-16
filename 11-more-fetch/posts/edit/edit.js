const params = new URLSearchParams(location.search)

const editPostBtn = document.querySelector('#submit-post')
let postTitle = document.querySelector('#post-title')
let postText = document.querySelector('#post-text')
const postForm = document.querySelector('#post-form')

fetch(`https://jsonplaceholder.typicode.com/posts/${params.get('id')}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('#id-options').value = data.userId
        postTitle.value = data.title
        postText.value = data.body
    })

postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    postTitle = postTitle.value
    postText = postText.value

    fetch(`https://jsonplaceholder.typicode.com/posts/${params.get('id')}`, {
        method: "PUT",
        body: JSON.stringify(
            {
                title: postTitle,
                body: postText
            }
        )
    })
        .then(res => {
            if (res.ok) { alert('You have successfully edited this post. Going back to main page.') }
            setTimeout(function () {
                window.location.href = "../../index.html"
            }, 3000);
        })
})