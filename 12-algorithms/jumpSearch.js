function jumpSearch(arr, elem) {
    let length = arr.length
    let step = Math.floor(Math.sqrt(length))
    let start = 0
    let end = Math.min(step, length)
    while (arr[Math.min(step, length) - 1] < elem) {
        start = step
        step += step
        if (start >= length) { return -1 }
    }
    while (arr[start] < elem) {
        start++
        if (start === end) { return -1 }
    }
    if (arr[start] === elem) {
        return start
    }
    return -1
}

console.log(jumpSearch([7, 21, 36, 78, 91, 156], 91))
