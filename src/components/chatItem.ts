import * as pug from 'pug'
import Block from '../utils/block'
import chatItemTmpl from './chatItem.tmpl'

export default class ChatItem extends Block {
 constructor(props) {
  super('div', { ...props, classNames: ['chats'] })
 }

 render() {
  return pug.compile(chatItemTmpl, {})(this.props)
 }
}
