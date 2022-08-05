//// TASK-1
// let number = parseInt(prompt("enter a number"))
// console.log(Math.trunc(number % 100 / 10))





////TASK-2
// let number = parseInt(prompt("enter a number that has an odd number of digits"))

// let num = number
// let length = 0
// while (num > 0) {
//     num = parseInt(num / 10)
//     length++
// }
// const n = Math.ceil(length / 2)
// const result = parseInt((number % (10 ** n)) / (10 ** (n - 1)))

// alert(result)





// // TASK-3
// let number = parseInt(prompt("enter a number"))
// alert(Math.trunc(number / 10))





// // TASK-4

// let number = parseInt(prompt("enter a number"))

// let num = number
// let length = 0
// while (num > 0) {
//     num = parseInt(num / 10)
//     length++
// }
// const result = parseInt(number % (10 ** (length - 1)))

// alert(result)





// // TASK-5
// let number = parseInt(prompt("enter a number"))
// if (number % 3 === 0 && number % 5 === 0) {
//     alert("your number can be divided by 3 and 5")
// } else { alert("your number CAN'T be divided by 3 or 5") }





// // TASK-6
// let number = parseInt(prompt("enter a number"))
// let result = false

// while (number > 0) {
//     if (number % 10 === 6) {
//         result = true
//         break
//     }
//     number = parseInt(number / 10)
// }
// alert(result)





// // TASK-7
// let number = parseInt(prompt("enter a number"))
// let n = number + 1;
// while (n % 11 !== 0) {
//     n++
// }
// alert(n)





// // TASK-8
// let eigthNumber = parseInt(prompt("enter a number"))
// let eigthNumberExp = parseInt(prompt("expo"))
// let expResult = eigthNumber ** eigthNumberExp;
// alert(expResult)





// // TASK-9 and TASK-10

// let number = parseInt(prompt("enter a number"))
// let sum = 0
// while (number != 0) {
//     sum = sum + number % 10;
//     number = Math.trunc(number / 10);
// }
// alert(sum)





// // TASK-11
// let number = parseInt(prompt("enter a number"))

// let n1 = Math.trunc(number / 10000);
// let n2 = Math.trunc(number / 1000 % 10);
// let n3 = Math.trunc(number / 100 % 10)
// let n4 = Math.trunc(number / 10 % 10)
// let n5 = Math.trunc(number % 10)

// alert(`${n5}${n4}${n3}${n2}${n1}`)





// // TASK-12

// let number = parseInt(prompt("enter a number"))
// let num = number
// let length = 0;
// while (num > 0) {
//     num = Math.trunc(num / 10)
//     length++
// }

// let result = 0;
// for (let i = 1; i <= length; i++) {
//     const lastNum = number % 10;
//     result += lastNum * (10 ** (length - i));
//     number = Math.trunc(number / 10)
// }

// alert(result)





// // TASK-13

// let a = parseInt(prompt("a"))
// let b = parseInt(prompt("b"))
// let c = parseInt(prompt("c"))
// let V = a * b * c;
// alert(V)





// // TASK-14

// let number = parseInt(prompt("enter a number"))

// let sum = 0, digit = 1;
// while (number > 0) {
//     if (digit % 2 === 1)
//         sum = sum + (number % 10);
//     number = Math.trunc(number / 10);
//     digit++
// }

// alert(sum)





// // TASK-15

// let whatNumber = parseInt(prompt("enter a number"))
// if (whatNumber === 0) {
//     alert(0)
// } else if (Math.sign(whatNumber) === -1) {
//     alert(-1)
// } else {
//     alert(1)
// }





// // TASK-16









// // TASK-17

// let number = parseInt(prompt("enter a number"))
// let d1 = Math.trunc(number / 100 % 10);
// let d2 = Math.trunc(number / 10 % 10);
// let d3 = Math.trunc(number % 10)

// let min = Math.min(d1, d2, d3)
// let max = Math.max(d1, d2, d3)
// let mid = d1 + d2 + d3 - max - min;
// alert(`${min} ${mid} ${max}`)





// // TASK-18

// let primeNumber = parseInt(prompt("enter a number to check if it's prime"))
// let isPrime = true

// if (primeNumber > 1) {
//     for (let i = 2; i < primeNumber; i++) {
//         if (primeNumber % i === 0) {
//             isPrime = false;
//         }
//     }
//     isPrime ? alert('prime') : alert('not prime')
// } else { alert('enter a number higher than 1') }





// // TASK-19

// let cubeNumber = parseInt(prompt("enter a number"))
// let smth = Math.floor(Math.cbrt(cubeNumber));

// alert(smth ** 3)





// // TASK-20

// let monthNumber = parseInt(prompt("enter a number"))
// switch (monthNumber) {
//     case 1:
//         month = "jan";
//         break;
//     case 2:
//         month = "feb";
//         break;
//     case 3:
//         month = "march";
//         break;
//     case 4:
//         month = "apr";
//         break;
//     case 5:
//         month = "may";
//         break;
//     case 6:
//         month = "jun";
//     case 7:
//         month = "jul";
//         break;
//     case 8:
//         month = "aug";
//         break;
//     case 9:
//         month = "sep";
//         break;
//     case 10:
//         month = "oct";
//         break;
//     case 11:
//         month = "nov";
//         break;
//     case 12:
//         month = "dec";
// }
// alert(month)