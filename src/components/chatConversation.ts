import Block from '../utils/block'
const chatConversationTmpl = require('./chatConversation.pug');
const chatStub = require('./chatStub.pug');


export default class ChatConversation extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['conversation-wrapper'] })
 }

 render() {
  // @ts-expect-error
  if (this.props.chatName) {
   return this.compile(chatConversationTmpl, {})(this.props)
  } else {
   return this.compile(chatStub, {})(this.props)
  }
 }
}
