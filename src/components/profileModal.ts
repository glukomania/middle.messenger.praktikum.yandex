import Block from '../utils/block'
const profileModalTmpl = require('./profileModal.pug');

type ChatBarProps = {}

export default class ChatBar extends Block {
 constructor(props: ChatBarProps) {
  super('div', { ...props })
 }

 render() {
  return profileModalTmpl(this.props)
 }
}
