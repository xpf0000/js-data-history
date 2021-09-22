const  { History, diff, applyChange } = require("./dist/JsDataHistory")

console.log('applyChange: ', applyChange)
console.log('History: ', History)

const a = { a: 0 }
const b = { a: 1 }
const c = diff(a, b)
console.log(c)

const history = new History(5)
history.init(a)
a.a = 5
history.add()
console.log(a)
history.back()
console.log(a)
history.redo()
console.log(a)

a.b = [1,2,3]
history.add()
console.log(a)
history.back()
console.log(a)

a.c = [0]
history.add()
console.log(a)
history.back()
console.log(a)
history.redo()
console.log(a)
