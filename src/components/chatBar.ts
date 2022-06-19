import Block from '../utils/block'
const chatBarTmpl = require('./chatBar.pug');

export default class ChatBar extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['user-bar'] })
 }

 render() {
  return chatBarTmpl(this.props)
 }
}
