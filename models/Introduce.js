export default class Introduce {
  constructor(type) {
    this.type = type
    this.ranges = []
  }

  setRange(range, type, description) {
    this.ranges.push({
      range,
      type,
      description,
    })
  }

  getRangeByValue(value) {
    return this.ranges.filter(item => {
      return value > item.range[0] && value < item.range[1]
    })[0] || null
  }

  getRangeByProp(prop, value) {
    return this.ranges.filter(item => {
      return item[prop] === value
    })[0] || null
  }
}
