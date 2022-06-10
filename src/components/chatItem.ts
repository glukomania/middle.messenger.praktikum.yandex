import * as pug from 'pug'
import Block from '../utils/block'
import chatItemTmpl from './chatItem.tmpl'

export default class ChatItem extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['chats'] })
 }

 render() {
   // @ts-expect-error
  return pug.compile(chatItemTmpl, {})(this.props)
 }
}
