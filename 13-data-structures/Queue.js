class Queue {
    #data = []

    constructor() {
    }

    enqueue(value) {
        this.#data.unshift(value)
        // this.#data.push(value)
    }

    dequeue() {
        return this.#data.pop()
        // return this.#data.shift()
    }

    get head() {
        return this.#data[this.size - 1] || null
    }

    get tail() {
        return this.#data[0] || null
    }

    get size() {
        return this.#data.length
    }
}

const myQueue = new Queue()
