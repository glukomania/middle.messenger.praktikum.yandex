import Block from '../utils/block'
const profileModalTmpl = require('./profileModal.pug');


export default class ChatBar extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return profileModalTmpl(this.props)
 }
}
