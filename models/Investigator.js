import Dice from './Dice.js'
import Chain from './utils/Chain.js'

const D6 = new Dice(6)
const D10 = new Dice(10)
const D100 = new Dice(100)

export default class Investigator {
  constructor({ name, age }) {
    this.name = name || ''
    this.age = age || 15
    this.property = {
      STR: 0, // 力量
      CON: 0, // 体质
      SIZ: 0, // 体型
      DEX: 0, // 敏捷
      APP: 0, // 外貌
      INT: 0, // 智力
      POW: 0, // 意志
      EDU: 0, // 教育
      LUC: 0, // 运气
      DAM: 0, // 伤害
      LIF: 0, // 生命
      MOV: 0, // 移动
    }

    this.profession = {}
  }

  /**
   * 初始化数值
   *
   * @memberof Investigator
   */
  async init() {
    this.setProperty(await this.calcValue('STR'))
    this.setProperty(await this.calcValue('CON'))
    this.setProperty(await this.calcValue('SIZ'))
    this.setProperty(await this.calcValue('DEX'))
    this.setProperty(await this.calcValue('APP'))
    this.setProperty(await this.calcValue('INT'))
    this.setProperty(await this.calcValue('POW'))
    this.setProperty(await this.calcValue('EDU'))
    this.setProperty(await this.calcValue('LUC'))
    this.adjustByAge()
  }

  /**
   *
   *
   * @param {String} 属性名
   * @param {number} [totalvalue=0] 默认为0，如果有值则取传入的值，属性算法计算
   * @memberof Investigator
   */
  async calcValue(prop, totalvalue = 0) {
    let value = 0
    switch (prop) {
      case 'STR':
        value = (totalvalue || await D6.getMultiResult(3)) * 5
        break
      case 'CON':
        value = (totalvalue || await D6.getMultiResult(3)) * 5
        break
      case 'SIZ':
        value = (totalvalue || await D6.getMultiResultAddValue(2, 6)) * 5
        break
      case 'DEX':
        value = (totalvalue || await D6.getMultiResult(3)) * 5
        break
      case 'APP':
        value = (totalvalue || await D6.getMultiResult(3)) * 5
        break
      case 'INT':
        value = (totalvalue || await D6.getMultiResultAddValue(2, 6)) * 5
        break
      case 'POW':
        value = (totalvalue || await D6.getMultiResult(3)) * 5
        break
      case 'EDU':
        value = (totalvalue || await D6.getMultiResultAddValue(2, 6)) * 5
        break
      case 'LUC':
        value = (totalvalue || await D6.getMultiResult(3)) * 5
        break
    }

    return {
      prop,
      value,
    }
  }

  /**
   * 检测最小值，如果小于0的情况，取0
   *
   * @param {Number} 存入的值
   * @memberof Investigator
   */
  setZeroIfMinus(number) {
    if (number <= 0) {
      return 0
    }

    return number
  }

  /**
   * 存入属性
   *
   * @param {String} 属性名
   * @param {Number} 存入的值
   * @memberof Investigator
   */
  setProperty({ prop, value }) {
    this.property[prop] = value
  }

  /**
   * 根据年龄调整数值
   *
   * @returns
   * @memberof Investigator
   */
  async adjustByAge() {
    // 公共职责链方法返回值
    const chainCommon = (ageRange, fn) => {
      if (this.age >= ageRange[0] && this.age <= ageRange[1]) {
        return fn()
      } else {
        return 'nextSuccessor'
      }
    }

    // 教育增强检定公共方法
    const imporveCheck = async (times = 1) => {
      for (let i = 0; i < times; i++) {
        const EDU = await D100.EverySecondsRoll()
        if (this.property.EDU < EDU.value) {
          const EDU_ADD = await D10.EverySecondsRoll()
          this.property.EDU = this.property.EDU + EDU_ADD
          if (this.property.EDU > 99) {
            this.property.EDU = 99
          }
        }
      }
    }

    const chain19 = chainCommon([15, 19], async () => {
      this.property.EDU = this.setZeroIfMinus(this.property.EDU - 5)
      const LUC = await this.calcValue('LUC', await D6.getResultBestValueByMulti(2, 3))

      if (this.property.LUC < LUC.value) {
        this.property.LUC = LUC.value
      }

      return {
        number: 5,
        type: ['STR', 'SIZ'],
      }
    })

    const chain39 = chainCommon([20, 39], async () => {
      await imporveCheck()

      return {
        number: 0,
        type: [],
      }
    })

    const chain49 = chainCommon([40, 49], async () => {
      await imporveCheck(2)
      this.property.APP = this.setZeroIfMinus(this.property.APP - 5)

      return {
        number: 5,
        type: ['STR', 'CON', 'DEX'],
      }
    })

    const chain59 = chainCommon([50, 59], async () => {
      await imporveCheck(3)
      this.property.APP = this.setZeroIfMinus(this.property.APP - 10)

      return {
        number: 10,
        type: ['STR', 'CON', 'DEX'],
      }
    })

    const chain69 = chainCommon([60, 69], async () => {
      await imporveCheck(4)
      this.property.APP = this.setZeroIfMinus(this.property.APP - 15)

      return {
        number: 20,
        type: ['STR', 'CON', 'DEX'],
      }
    })

    const chain79 = chainCommon([70, 79], async () => {
      await imporveCheck(4)
      this.property.APP = this.setZeroIfMinus(this.property.APP - 20)

      return {
        number: 40,
        type: ['STR', 'CON', 'DEX'],
      }
    })

    const chain89 = chainCommon([80, 89], async () => {
      await imporveCheck(4)
      this.property.APP = this.setZeroIfMinus(this.property.APP - 25)

      return {
        number: 80,
        type: ['STR', 'CON', 'DEX'],
      }
    })

    const _chain19 = new Chain(chain19)
    const _chain39 = new Chain(chain39)
    const _chain49 = new Chain(chain49)
    const _chain59 = new Chain(chain59)
    const _chain69 = new Chain(chain69)
    const _chain79 = new Chain(chain79)
    const _chain89 = new Chain(chain89)

    _chain19.setNextSuccessor(_chain39)
    _chain39.setNextSuccessor(_chain49)
    _chain49.setNextSuccessor(_chain59)
    _chain59.setNextSuccessor(_chain69)
    _chain69.setNextSuccessor(_chain79)
    _chain79.setNextSuccessor(_chain89)

    return await _chain19.passRequest(this.age)
  }
}
