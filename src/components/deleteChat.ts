import * as pug from 'pug'
import Block from '../utils/block'
import deleteChatTmpl from './deleteChat.tmpl'

export default class DeleteChat extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['delete-chat'] })
 }

 render() {
   // @ts-expect-error
  return pug.compile(deleteChatTmpl, {})(this.props)
 }
}
