class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    get(index) {
        if (index > this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head) {
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.head) {
            newNode.next = this.head
            this.head = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
    }

    insert(index, value) {
        if (index > this.length) return false
        if (index === this.length) return this.append(value)
        if (index === 0) return this.prepend(value)

        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
    }

    shift() {
        if (this.head) {
            let temp = this.head
            this.head = this.head.next
            temp.next = null
            this.length--

            if (this.length === 0) {
                this.head = null
                this.tail = null
            }

            return temp
        } else {
            return undefined
        }
    }

    pop() {
        if (this.head) {
            let temp = this.head
            let pre = this.head
            for (let i = 0; i < this.length - 1; i++) {
                pre = temp
                temp = temp.next
            }
            this.tail = pre
            this.tail.next = null
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return temp
        } else {
            return undefined
        }
    }

    remove(index) {
        if (index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()


        let previous = this.get(index - 1)
        let temp = previous.next

        previous.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
}

const list = new LinkedList()

list.append('Kirk')
list.append('Rob')
list.append('Joe')
list.prepend('Bill')
list.prepend('Warren')
list.insert(2, 'Alice')
list.remove(3)

console.log(list)