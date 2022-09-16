const postsContainer = document.getElementById('posts-container')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach((elem) => {
            const postLink = document.createElement('a')
            postLink.textContent = elem.title
            postLink.setAttribute('href', `/posts/?id=${elem.id}`)
            postsContainer.append(postLink)
            postLink.style.display = 'block'
        })
    })



const newPostBtn = document.querySelector('#new-post')
newPostBtn.innerHTML = `<a href="/posts/new">Make a new Post</a>`
