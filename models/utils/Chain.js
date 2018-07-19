export default class Chain {
  constructor(fn) {
    this.fn = fn
    this.successor = null
  }

  setNextSuccessor(successor) {
    this.successor = successor
  }

  async passRequest(...args) {
    if (await this.fn === 'nextSuccessor') {
      return this.successor && this.successor.passRequest(...args)
    }

    return await this.fn
  }
}
