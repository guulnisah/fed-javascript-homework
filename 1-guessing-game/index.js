const randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber)

let typedNumber = parseInt(prompt('Guess the number...'))
let guesses = 1

while (typedNumber !== randomNumber) {
    guesses++
    if (typedNumber < randomNumber) {
        typedNumber = parseInt(prompt('Go bigger!'))
    } else {
        typedNumber = parseInt(prompt('Go smaller...'))
    }
}
alert(`Congratulations! It took you ${guesses} guess(es).`)
