function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1

    while (start <= end) {
        let middle = start + Math.floor((end - start) / 2)

        if (arr[middle] === elem) { return middle }
        if (elem < arr[middle]) { end = middle - 1 }
        if (elem > arr[middle]) { start = middle + 1 }
    }
    return -1
}

console.log(binarySearch([7, 21, 36, 78, 91, 156], 91))
console.log(binarySearch(['apple', 'bee', 'cat', 'dog', 'toy'], 'dog'))