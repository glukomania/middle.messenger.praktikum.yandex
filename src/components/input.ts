import Block from '../utils/block'
const inputTmpl = require('./input.pug');


export default class Input extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object })
 }

 render() {
  return this.compile(inputTmpl, {})(this.props)
 }
}
