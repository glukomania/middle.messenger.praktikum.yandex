import Block from '../utils/block'
const chatConversationTmpl = require('./chatConversation.pug');
const chatStub = require('./chatStub.pug');

type ChatConversationProps = {
  chatName: null; 
  // eslint-disable-next-line no-unused-vars
  events: { click: (e: any) => void; };
}

export default class ChatConversation extends Block {
 constructor(props: ChatConversationProps) {
  super('div', { ...props, classNames: ['conversation-wrapper'] })
 }

 render() {
  // @ts-expect-error
  if (this.props.chatName) {
   return chatConversationTmpl(this.props)
  } else {
   return chatStub(this.props)
  }
 }
}
