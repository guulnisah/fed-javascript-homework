class PriorityQueueItem {
    constructor(value, priority = 0) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    #data = []

    constructor() {
    }

    enqueue(value, priority = 0) {
        const index = this.#data.findIndex((element) => {
            return element.priority >= priority
        })

        const newItem = new PriorityQueueItem(value, priority)

        if (index === -1) {
            this.#data.push(newItem)
        } else {
            this.#data.splice(index, 0, newItem)
        }
    }

    dequeue() {
        return this.#data.pop()?.value || null
    }

    get head() {
        return this.#data[this.size - 1]?.value || null
    }

    get tail() {
        return this.#data[0]?.value || null
    }

    get size() {
        return this.#data.length
    }
}

const myQueue = new PriorityQueue()