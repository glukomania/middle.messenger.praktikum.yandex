import Block from '../utils/block'
const chatItemTmpl = require('./chatItem.pug');


export default class ChatItem extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['chats'] })
 }

 render() {
  return this.compile(chatItemTmpl, {})(this.props)
 }
}
