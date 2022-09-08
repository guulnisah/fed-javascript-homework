const postsContainer = document.getElementById('posts-container')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach((elem) => {
            const postLink = document.createElement('a')
            postLink.innerHTML = elem.title
            postLink.setAttribute('href', `/posts/?id=${elem.id}`)
            postsContainer.append(postLink)
            postLink.style.display = 'block'
        })
    })



