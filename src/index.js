const History = require('./History.js')
const { diff, observableDiff, applyDiff, applyChange, revertChange } = require('./DeepDiff.js')
module.exports = { History, diff, observableDiff, applyDiff, applyChange, revertChange }
