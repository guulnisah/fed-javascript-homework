//21
function length(num) {
    let digits = 0
    while (num > 0) {
        num = Math.trunc(num / 10)
        digits++
    }
    return digits
}
console.log(length(12345))



//22
function greet(personName = "guest") {
    return `Hello ${personName}`
}
console.log(greet("James"))



//23
function palindrome(num) {
    let rev = 0;
    let n = num;
    while (n != 0) {
        let lastDigit = n % 10;
        rev = rev * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    if (rev === num) { return "It's a palindrome" }
    else { return "It's not a palindrome" }
}
console.log(palindrome(141))
console.log(palindrome(12345))
console.log(palindrome(222))



//24
function sameNum(num) {
    let n1 = Math.trunc(num / 100 % 10)
    let n2 = Math.trunc(num / 10 % 10)
    let n3 = Math.trunc(num % 10)

    if (n1 == n2 || n1 == n3 || n2 == n3) { return "Numbers are the same" }
    else { return "Numbers are not the same" }

}
console.log(sameNum(455))
console.log(sameNum(456))



//25
function dividedByTen(num) {
    while (num % 10 !== 0) {
        if (num > 0) {
            num--
        }
        else {
            num++
        }
    }
    return num
}
console.log(dividedByTen(36))



//26
function expo(n, m = 2) {
    return n ** m
}
console.log(expo(2))
console.log(expo(2, 3))



//27
function lastNum(num, n) {
    return (Math.trunc(num / Math.pow(10, n - 1))) % 10
}
console.log(lastNum(12345, 1))
console.log(lastNum(12345, 2))
console.log(lastNum(12345, 3))
console.log(lastNum(12345, 4))
console.log(lastNum(12345, 5))



//28
function primeNum(primeNumber) {
    let isPrime = true
    if (primeNumber > 1) {
        for (let i = 2; i < primeNumber; i++) {
            if (primeNumber % i === 0) {
                isPrime = false;
            }
        }
        return isPrime ? 'prime' : 'not prime'
    } else { return 'enter a number higher than 1' }
}
console.log(primeNum(17))



//29
function howManyOdd(num) {
    let n = 0
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0)
            n++
    }
    return n
}
console.log(howManyOdd(10))
console.log(howManyOdd(17))



//30
function howManyBills(num) {

    let fiveHundred = Math.trunc(num / 500)
    num = num - fiveHundred * 500;

    let twoHundred = Math.trunc(num / 200)
    num = num - twoHundred * 200;

    let hundred = Math.trunc(num / 100)
    num = num - hundred * 100;

    let fifty = Math.trunc(num / 50)
    num = num - fifty * 50;

    let twenty = Math.trunc(num / 20)
    num = num - twenty * 20;

    let ten = Math.trunc(num / 10)
    num = num - ten * 10;

    let five = Math.trunc(num / 5)
    num = num - five * 5;

    let one = Math.trunc(num / 1)
    num = num - one * 1;


    return `
    ${fiveHundred} - ₼500, 
    ${twoHundred} - ₼200, 
    ${hundred} - ₼100, 
    ${fifty} - ₼50, 
    ${twenty} - ₼20, 
    ${ten} - ₼10, 
    ${five} - ₼5, 
    ${one} - ₼1
    `
}
console.log(howManyBills(1889))