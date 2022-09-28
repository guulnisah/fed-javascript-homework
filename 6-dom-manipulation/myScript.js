const mainTitle = document.querySelector('h1 a').innerText = 'Website'

const navBar = document.querySelector('#nav')


// const navUl = document.createElement('ul')
// navBar.appendChild(navUl)

function navigation(data, parent) {
    const navUl = document.createElement('ul')

    data.forEach((elem, index) => {
        const navLi = document.createElement('li')
        if (index === 0) { navLi.classList.add('current') }

        navUl.appendChild(navLi)
        const navA = document.createElement('a')
        navA.setAttribute('href', elem.link)
        navA.innerText = elem.title
        navLi.appendChild(navA)
        navUl.appendChild(navLi)

        if (elem.children && elem.children.length) {
            navigation(elem.children, navLi);
        }

    })

    parent.appendChild(navUl)
}

navigation(navData, navBar)



introData.forEach((elem) => {

    const introDiv = document.getElementById('intro-div')

    const div = document.createElement('div')
    introDiv.appendChild(div)
    div.classList.add('col-4', 'col-12-medium')

    const section = document.createElement('section')
    div.appendChild(section)
    section.classList.add(elem.section)


    const icon = document.createElement('i')
    section.appendChild(icon)

    elem.icon.forEach((elem) => {
        icon.classList.add(elem)
    })

    const header = document.createElement('header')
    const h2 = document.createElement('h2')
    section.appendChild(header)
    header.appendChild(h2)
    h2.innerText = elem.title

    const p = document.createElement('p')
    section.appendChild(p)
    p.innerText = elem.description
})



// my portfolio
portfolioData.forEach((elem) => {
    const portfolioDiv = document.getElementById('portfolio-div')

    const div = document.createElement('div')
    portfolioDiv.appendChild(div)
    div.classList.add('col-4', 'col-6-medium', 'col-12-medium')


    const section = document.createElement('section')
    div.appendChild(section)
    section.classList.add('box')

    const a = document.createElement('a')
    section.appendChild(a)
    a.classList.add('image', 'featured')

    const img = document.createElement('img')
    a.appendChild(img)
    img.setAttribute('src', elem.image)

    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    section.appendChild(header)
    header.appendChild(h3)
    h3.innerText = elem.title

    const p = document.createElement('p')
    section.appendChild(p)
    p.innerText = elem.description

    const footer = document.createElement('footer')
    section.appendChild(footer)
    footer.innerHTML = '<ul class="actions"><li><a href="#" class="button alt">Find out more</a></li></ul>'
})

blogData.forEach((elem) => {
    const blogDiv = document.getElementById('blog-div')

    const div = document.createElement('div')
    blogDiv.appendChild(div)
    div.classList.add('col-6', 'col-12-small')


    const section = document.createElement('section')
    div.appendChild(section)
    section.classList.add('box')

    const a = document.createElement('a')
    section.appendChild(a)
    a.classList.add('image', 'featured')

    const img = document.createElement('img')
    a.appendChild(img)
    img.setAttribute('src', elem.image)

    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    const date = document.createElement('p')
    section.appendChild(header)
    header.appendChild(h3)
    header.appendChild(date)
    h3.innerText = elem.title
    date.innerText = `Posted on ${elem.date}`

    const p = document.createElement('p')
    section.appendChild(p)
    p.innerText = elem.text

    const footer = document.createElement('footer')
    section.appendChild(footer)

    const ul = document.createElement('ul')
    footer.appendChild(ul)
    ul.classList.add('actions')

    const continueButton = document.createElement('li')
    ul.appendChild(continueButton)
    continueButton.innerHTML = `<a href="${elem.link}" class="button icon solid fa-file-alt">Continue Reading</a>`

    const commentsButton = document.createElement('li')
    ul.appendChild(commentsButton)
    commentsButton.innerHTML = `<a href="${elem.link}" class="button alt icon solid fa-comment">${elem.commentCount} comments</a>`
})

socialLinks.forEach((elem) => {
    const socialsSection = document.getElementById('socials-section')
    const socialsContact = document.getElementById('socials-contact')

    const ul = document.createElement('ul')
    socialsSection.appendChild(ul)
    ul.classList.add('social')
    socialsSection.insertBefore(ul, socialsContact)

    const li = document.createElement('li')
    ul.appendChild(li)

    li.innerHTML = `<a class="icon brands fa-${elem.icon}" href="${elem.link}"><span class="label">${elem.name}</span></a>`

    ul.style.display = 'inline'
    ul.style.marginRight = '10px'
})