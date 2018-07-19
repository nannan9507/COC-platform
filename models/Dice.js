export default class Dice {
  constructor(face) {
    this.face = face
    this.result = 0
  }

  /**
   * 获取骰子随机结果
   */
  getResult() {
    this.result = Math.floor(Math.random() * this.face + 1)
    return this.result
  }

  /**
   * 投骰子Promise封装
   */
  EverySecondsRoll() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getResult())
      }, 0)
    })
  }

  /**
   * 结果保存至result
   */
  save(result) {
    this.result = result
  }

  /**
   * 多颗骰子总和
   */
  async getMultiResult(numbers = 1) {
    let total = 0

    for (let i = 0; i < numbers; i++) {
      const val = await this.EverySecondsRoll()
      total += val
    }

    this.save(total)

    return total
  }

  /**
   * 多颗骰子总和加固定值
   */
  async getMultiResultAddValue(numbers = 1, value) {
    let total = await this.getMultiResult(numbers) + value
    this.save(total)

    return total
  }

  /**
   * 多颗骰子取最好的单个值
   */
  async getResultBestValueBySingle(times = 1) {
    let best = 0

    for (let i = 0; i < times; i++) {
      const result = await this.EverySecondsRoll()
      if (result > best) {
        best = result
      }
    }

    this.save(best)

    return best
  }

  /**
   * 多次投骰子取最好的总值
   */
  async getResultBestValueByMulti(times = 1, numbers) {
    let best = 0

    for (let i = 0; i < times; i++) {
      const result = await this.getMultiResult(numbers)
      if (result > best) {
        best = result
      }
    }

    this.save(best)

    return best
  }
}
