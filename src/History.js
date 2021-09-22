const { diff, applyChange, revertChange } = require('./DeepDiff.js')
/**
 * 基于deepdiff 大数据量时的 数据的历史记录操作
 */
class History {
  constructor(max = 100) {
    // 当前位置索引 根据此索引做前进后退
    this.index = 0
    // 历史记录
    this.list = []
    // 最后记录的完整数据
    this.last = null
    // 历史记录最大数量
    this.max = max
    // 需要记录变更历史的数据
    this.current = null
  }

  /**
   * 初始化 重置记录索引 清空历史记录 关联数据
   * @param base
   */
  init(base) {
    this.index = 0
    this.list = []
    this.last = JSON.parse(JSON.stringify(base))
    this.current = base
  }

  /**
   * 添加历史记录
   */
  add() {
    // 获取差异 添加记录
    const d = diff(this.last, this.current)
    if (!d) {
      return
    }
    // 超过最大数量 删除开头的记录
    if (this.list.length === this.max) {
      this.list.splice(0, 1)
      this.index -= 1
    }
    // 移除当前记录点后面的记录
    this.list.splice(this.index)
    this.list.push(d)
    this.index += 1
    this.last = JSON.parse(JSON.stringify(this.current))
  }

  /**
   * 撤销
   */
  back() {
    return new Promise((resolve) => {
      if (this.index > 0) {
        this.index -= 1
        const d = this.list[this.index]
        for (const obj of d) {
          revertChange(this.current, this.last, obj)
        }
        this.last = JSON.parse(JSON.stringify(this.current))
        resolve(d)
      }
    })
  }

  /**
   * 重做
   */
  redo() {
    return new Promise((resolve) => {
      if (this.index < this.list.length) {
        const d = this.list[this.index]
        for (const obj of d) {
          applyChange(this.current, this.last, obj)
        }
        this.last = JSON.parse(JSON.stringify(this.current))
        this.index += 1
        resolve(d)
      }
    })
  }
}

module.exports = History
