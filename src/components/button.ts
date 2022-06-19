import Block from '../utils/block'
const button = require('./button.pug');

export default class Button extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }


 render() {
  return button(this.props)
 }
}
