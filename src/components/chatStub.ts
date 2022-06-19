import Block from '../utils/block'
const chatStub = require('./chatStub.pug');


export default class ChatStub extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['stub-text'] })
 }

 render() {
  return chatStub(this.props)
 }
}
