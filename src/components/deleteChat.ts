import Block from '../utils/block'
const deleteChatTmpl = require('./deleteChat.pug');


export default class DeleteChat extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['delete-chat'] })
 }

 render() {
  return deleteChatTmpl(this.props)
 }
}
