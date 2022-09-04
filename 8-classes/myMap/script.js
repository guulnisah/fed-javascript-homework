class myMap {
    constructor() {
        this.array = []
    }

    set(key, value) {
        if (typeof key !== 'object' && !Array.isArray(key) && key !== null) {
            let hasKey = this.array.some((elem) => {
                if (Object.keys(elem)[0] === key) {
                    elem[key] = value;
                    return true;
                }
            })
            if (!hasKey) {
                this.array.push({ [key]: value });
            }
            return this.array;
        } else { return `Objects and Arrays are not allowed as keys` }
    }

    delete(key) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i][key]) {
                this.array.splice(i, 1);
            }
        }
    }

    get(key) {
        for (let elem of this.array) {
            if (elem[key]) {
                return elem
            }
        }
    }

    has(key) {
        let hasKey = false
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i][key]) {
                hasKey = true
            }
        }
        return hasKey
    }


    clear() {
        this.array = {}
    }

    get size() {
        return this.array.length
    }
}

const newMap = new myMap()
console.log(newMap)
newMap.set('one', 'uno')
newMap.set('two', 'dos')
newMap.set('three', 'tres')
newMap.set('four', 'cuatro')
newMap.set('one', 'une')

// class myMap {
//     constructor() {
//         this.array = []
//     }

//     set(key, value) {
//         const obj = {
//             key: key,
//             value: value
//         }
//         this.array.push(obj)
//     }

//     delete(key) {
//         for (let i = 0; i < this.array.length; i++) {
//             if (this.array[i].key === key) {
//                 this.array.splice(i, 1);
//             }
//         }
//     }

//     get(key) {
//         for (let elem of this.array) {
//             if (elem.key === key) {
//                 return elem
//             }
//         }
//     }

//     has(key) {
//         let hasKey = false
//         for (let i = 0; i < this.array.length; i++) {
//             if (this.array[i].key === key) {
//                 hasKey = true
//             }
//         }
//         return hasKey
//     }

//     clear() {
//         this.array = {}
//     }

//     get size() {
//         return this.array.length
//     }
// }

