import Block from '../utils/block'
const chatStub = require('./chatStub.pug');

type ChatStubProps = {
  chatName: null; 
  // eslint-disable-next-line no-unused-vars
  events: { click: (e: any) => void; };
}

export default class ChatStub extends Block {
 constructor(props: ChatStubProps) {
  super('div', { ...props, classNames: ['stub-text'] })
 }

 render() {
  return chatStub(this.props)
 }
}
