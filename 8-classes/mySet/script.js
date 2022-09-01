class mySet {

    constructor(arr) {
        this.array = []

        for (let elem of arr) {
            this.add(elem)
        }
    }

    add(elem) {
        if (!this.array.includes(elem)) { this.array.push(elem) }
    }

    get size() {
        return this.array.length
    }

    delete(elem) {
        const index = this.array.indexOf(elem)
        this.array.splice(index, 1)
    }

    clear() {
        this.array = []
    }

    has(elem) {
        if (!this.array.includes(elem)) { return false }
        else { return true }
    }
}

const newSet = new mySet([1, 1, 1])
console.log(newSet)

newSet.add(123)
newSet.add(25)
newSet.add(25)
newSet.add(25)
newSet.add(25)
newSet.add(25)