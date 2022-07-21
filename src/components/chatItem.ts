import Block from '../utils/block'
const chatItemTmpl = require('./chatItem.pug');

type ChatItemProps = {
  chatName: null; 
  // eslint-disable-next-line no-unused-vars
  events: { click: (e: any) => void; };
}

export default class ChatItem extends Block {
 constructor(props: ChatItemProps) {
  super('div', { ...props, classNames: ['chats'] })
 }

 render() {
  return chatItemTmpl(this.props)
 }
}
