const book = {
    author: "Steven King",
    name: "Shining",
    year: 1977,
    genre: "Horror",
    likeIt: true
}

// 31. Verilən obyekin key-lərini ekrana verən funksiya yazın

function showKeys(obj) {
    return Object.keys(obj)
}

console.log('__________Task 31__________')
console.log(showKeys(book))

// 32. Obyektin klonunu yaradan funksiya yazın

function cloneObject(obj) {
    const newBook = { ...obj }
    return newBook
}

console.log('__________Task 32__________')
console.log(cloneObject(book))

// 33. Verilən obyektdə dəyəri string olan elementlərin key-lərini ekrana verən funksiya yazın

function showStrings(obj) {
    const values = Object.values(obj)
    const result = []

    for (value of values) {
        if (typeof value === 'string') {
            result.push(value)
        }
    }

    return result
}

console.log('__________Task 33__________')
console.log(showStrings(book))


// 34. Aldığı parametrlərə görə yeni obyekt yaradan funksiya yazın (məs.: createObj('Elchin', 'Zadeh') => {name: 'Elchin', surname: 'Zadeh'})

function createObj(a, b) {
    const person = {
        name: a,
        surname: b
    }
    return person
}

console.log('__________Task 34__________')
console.log(createObj('Jane', 'Doe'))

// 35. Obyektin seçilən property-sini silən funksiya yazın (məs.: deleteKey(obj, key))
function deleteKey(obj, key) {
    delete obj[key]
    return obj
}

console.log('__________Task 35__________')
console.log(deleteKey(book, 'genre'))



// 36. Obyektin uzunluğunu hesablayan funksiya yazın
function objectLength(obj) { return Object.keys(obj).length }

console.log('__________Task 36__________')
console.log(objectLength(book))

// 37. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean)

function hasOwn(obj, key) {
    const keys = Object.keys(obj)
    string = false
    for (elem of keys) {
        if (elem === key) {
            string = true
        }
    }
    return string
}

console.log('__________Task 37__________')
console.log(hasOwn(book, 'author'))
console.log(hasOwn(book, 'name'))
console.log(hasOwn(book, 'namvve'))


// 38. Massivin son elementini qaytaran funksiya yazın

let firstArray = [1, 2, 3, 4, 5, 6, 7, 8]

function lastElement(arr) {
    const last = arr.pop()
    return last
}

console.log('__________Task 38__________')
console.log(lastElement(firstArray))

// 39. Massivin klonunu yaradan funksiya yazın

let myArray = [1, true, 3, 4, 5, 6, 7, 8, 'nine']

function cloneArr(arr) {
    let clone = [...arr]
    return clone
}

console.log('__________Task 39__________')
console.log(cloneArr(myArray))

// 40. Massivin ilk n elementini ekrana verən funksiya yazın

function nthElement(arr, n) {
    const nth = arr.slice(n - 1, n)
    return nth.toString()
}

console.log('__________Task 40__________')
console.log(nthElement(myArray, 1))

// 41. Massivin son n elementini ekrana verən funksiya yazın

function nthElementEnd(arr, n) {
    const revArr = arr.reverse()
    const nthEnd = revArr.slice(n - 1, n)
    return nthEnd.toString()
}

console.log('__________Task 41__________')
console.log(nthElementEnd(myArray, 3))


// 42. Massivin bütün elementlərini vergüllə ayıraraq ekrana verın funksiya yazın

let newArray = ['A', 'B', 'C', 'D', 'E']

// with toString
function stringified(arr) {
    return arr.toString()
}

console.log('__________Task 42__________')
console.log(stringified(newArray))


//without toString 
function listedArray(arr) {
    list = arr[0]
    for (let i = 1; i < arr.length; i++) {
        list += ', ' + arr[i]
    }
    return list
}

console.log('__________Task 42__________')
console.log(listedArray(newArray))

// 43. Massivdə ən çox işlənən elementi qaytaran funksiya yazın
// ????????????????????????????????????????????????????????????

let frequentArray = [1, 1, 2, 5, 3, 5, 1, 5, 5]

function findMostFrequent(arr) {
    let mostFrequent = arr[0];
    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (maxCount < count) {
            maxCount = count;
            mostFrequent = arr[i]
        }
    }
    return mostFrequent
}

console.log('__________Task 43__________')
console.log(findMostFrequent(frequentArray))


// 44. Massivin tək yerdə duran elementlərini silən (null və ya undefined) funksiya yazın


const oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function oddRemover(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log('__________Task 44__________')
console.log(oddRemover(oddArr))

// 45. Massivin verilən indeksdən sonrakı elementlərini silən funksiya yazın

const removeArr = ['-', '=', '-', 1, 9]

function removeElem(arr, n) {
    arr.splice(n)
    return arr
}

console.log('__________Task 45__________')
console.log(removeElem(removeArr, 2))





