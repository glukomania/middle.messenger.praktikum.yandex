import * as pug from 'pug'
import Block from '../utils/block'
import chatStub from './chatStub.tmpl'

export default class ChatStub extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['stub-text'] })
 }

 render() {
  // @ts-expect-error
  return pug.compile(chatStub, {})(this.props)
 }
}
