function insertionSort(array) {
    let temp, i, j
    for (i = 1; i < array.length; i++) {
        temp = array[i]
        for (j = i - 1; array[j] > temp && j > -1; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = temp
    }
    return array
}

console.log(insertionSort([91, 21, 7, 156, 78, 36]))

