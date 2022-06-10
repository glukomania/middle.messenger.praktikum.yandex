import * as pug from 'pug'
import Block from '../utils/block'
import messageOut from './messageOut.tmpl'
import messageIn from './messageIn.tmpl'
import { getTime } from '../utils/getTime'

type Message = {
 chat_id: number
 content: string
 file: string
 id: number
 is_read: boolean
 time: string
 type: string
 user_id: number
}
export default class MessagesList extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object })
 }

 getMessageslist(message: Message) {
  const msg = message.user_id === window.store.getState().user.id ? messageOut : messageIn;

  return pug.compile(
    msg,
    {},
   )({ ...message, time: getTime(message.time) })

 }

 render() {
   // @ts-expect-error
  return this.props.messages
  // @ts-expect-error
   ? this.props.messages.map(this.getMessageslist).join(`\n`)
   : pug.compile(`div`, {})([])
 }
}
