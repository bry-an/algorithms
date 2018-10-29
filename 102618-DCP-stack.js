
const stack = {
    curIndex: 0,
    stack: [],

    arrPush: function (val) {
        this.stack[this.curIndex] = val
        this.curIndex++
    },

    arrPop: function () {
        if (this.stack.length === 0)
            return null
        const value = this.stack[this.curIndex]
        this.stack.length = this.stack.length--
        this.curIndex--
        return value
    },
    max: function () {
        if (this.stack.length === 0)
            return null
        let max = 0
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] > max)
                max = stack[i]
        }
        return max
    }
}

console.log(stack.stack)
stack.arrPush(7)
console.log('after push', stack.stack)
stack.arrPush(9)
stack.arrPush(11)
console.log('pop', stack.arrPop())
console.log('stack after pop', stack.stack)
console.log('max should be 9', stack.max())