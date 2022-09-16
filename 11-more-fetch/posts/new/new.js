const idOptions = document.querySelector('#id-options')
const postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const idValue = idOptions.options[idOptions.selectedIndex].value
    const postTitle = document.querySelector('#post-title').value
    const postText = document.querySelector('#post-text').value

    fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: "POST",
        body: JSON.stringify(
            {
                userId: idValue,
                title: postTitle,
                body: postText
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if (res.ok) { alert('You new post is ready. Going back to main page.') }
        })
    setTimeout(function () {
        window.history.back()
    }, 3000);
})