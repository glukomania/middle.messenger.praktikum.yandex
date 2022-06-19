import Block from '../utils/block'
const messageOut = require('./messageOut.pug');
const messageIn = require('./messageIn.pug');

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

  return msg({ ...message, time: getTime(message.time) })

 }

 render() {
   // @ts-expect-error
  return this.props.messages
  // @ts-expect-error
   ? this.props.messages.map(this.getMessageslist).join(`\n`)
   : `<div></div>`
 }
}
