import * as pug from 'pug'
import Block from '../utils/block'
import chatConversationTmpl from './chatConversation.tmpl'
import chatStub from './chatStub.tmpl'

export default class ChatConversation extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['conversation-wrapper'] })
 }

 render() {
  // @ts-expect-error
  if (this.props.chatName) {
  // @ts-expect-error
   return pug.compile(chatConversationTmpl, {})(this.props)
  } else {
  // @ts-expect-error
   return pug.compile(chatStub, {})(this.props)
  }
 }
}
