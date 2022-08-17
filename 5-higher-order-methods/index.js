let stuff = ['orange', 'hello', 'smth', 'whatever']

// 46. Massivin elementlərini ayrı ayrı console-a verən funksiya yazın
function separateElements(arr) {
    const elements = arr.forEach(elem => console.log(elem))
}
separateElements(stuff)

// 47. Massivin içindəki bütün string-ləri birləşdirən funksiya yazın
function concatStrings(arr) {
    const strings = arr.join('')
    return strings
}
console.log(concatStrings(stuff))



let nums = [1, 0, 2, 3, 10]

// 48. Massivin içindəki 0dan fərqli olan ədədləri bir-birinə vuran funksiya yazın
function multiply(arr) {
    const filtered = arr.filter(elem => elem > 0)
    const multi = filtered.reduce((a, b) => a * b, 1)
    console.log(multi)
}

multiply(nums)


let numbers = [6, 10, -70, 4, 23, 90, 8, -3, 5, -11, 0]

// 49. Mənfi ədədləri müsbətə çevirib yeni array yaradın
const negativeToPositive = numbers.map(elem => Math.abs(elem))
console.log(negativeToPositive)

// 50. Elementləri kiçikdən böyüyə sıralayın
const smalToBig = numbers.sort((a, b) => a - b)
console.log(smalToBig)

// 51. Elementləri aldığı parametr-ə görə (kiçikdən böyüyə və ya böyükdən kiçiyə) sıralayan funksiya yazın
function sortArray(arr, condition) {
    const sorted = arr.sort((a, b) => {
        if (condition > 0) { return a - b }
        else if (condition < 0) { return b - a }
    }
    )
    return sorted
}
console.log(sortArray(numbers, -1))
console.log(sortArray(numbers, 1))

// 52. Mənfi ədədləri silib yeni array yaradın
const noNegatives = numbers.filter(elem => elem > -1)
console.log(noNegatives)

// 53. Hər elementdən sadəcə birinin olduğu yeni bir massiv yaradın
const newArr = numbers.forEach(elem => console.log([elem]))


const students = [
    {
        fullName: 'Jack Jones',
        age: 24,
        gender: 'male'
    },
    {
        fullName: 'Emily Smith',
        age: 21,
        gender: 'female'
    },
    {
        fullName: 'Charles Damons',
        age: 43,
        gender: 'male'
    },
    {
        fullName: 'Tom Bines',
        age: 19,
        gender: 'male'
    }


]



// 54. İstifadəçilərin sadəcə adlarının olduğu massiv yaradın
const studentNames = students.map(elem => elem.fullName)
console.log(studentNames)


// 55. Kişiləri və qadınları ayrı array-lərə yığın
const maleStudents = students.filter(elem => elem.gender === 'male')
const femaleStudents = students.filter(elem => elem.gender === 'female')
console.log(maleStudents)
console.log(femaleStudents)

// 56. Yaşı 20-dən az olanları çıxarıb qalanlarını bir massivə yığın
const youngerStudents = students.filter(elem => elem.age < 20)
console.log(youngerStudents)

// 57. Yaşlarına görə sıralayın
const studentAge = students.sort((a, b) => a.age - b.age)
console.log(studentAge)