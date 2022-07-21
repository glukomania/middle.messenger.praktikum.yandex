import Block from '../utils/block'
const deleteChatTmpl = require('./deleteChat.pug');

type DeleteChatProps = {
  chatNumber: number
}
export default class DeleteChat extends Block {
 constructor(props: DeleteChatProps) {
  super('div', { ...props, classNames: ['delete-chat'] })
 }

 render() {
  return deleteChatTmpl(this.props)
 }
}
