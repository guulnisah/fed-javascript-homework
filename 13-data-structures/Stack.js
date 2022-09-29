class Stack {
    #data = []

    constructor() {
    }

    push(value) {
        this.#data.push(value)
    }

    pop() {
        return this.#data.pop()
    }

    empty() {
        this.#data.splice(0, this.size)
    }

    get top() {
        return this.#data[this.size - 1] || null
    }

    get size() {
        return this.#data.length
    }
}

const myStack = new Stack()
