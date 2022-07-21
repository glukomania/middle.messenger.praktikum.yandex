import Block from '../utils/block'
const chatBarTmpl = require('./chatBar.pug');

type ChatBarProps = {
  events: { click: () => void; };
}

export default class ChatBar extends Block {
 constructor(props: ChatBarProps) {
  super('div', { ...props, classNames: ['user-bar'] })
 }

 render() {
  return chatBarTmpl(this.props)
 }
}
