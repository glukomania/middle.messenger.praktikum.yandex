import * as pug from "pug";
import Block from "../utils/block";
import messageOut from './messageOut.tmpl'
import messageIn from './messageIn.tmpl'

type Message = {
  chat_id: number,
  content: string,
  file: string,
  id: number,
  is_read: boolean,
  time: string,
  type: string,
  user_id: number
}
export default class MessagesList extends Block {
  constructor(props) {
    super("div", { ...props });
  }

  getMessageslist (message: Message) {
    if (message.user === window.store.getState().user.id) {
      return pug.compile((messageOut), {})(message)
    } else {
      return pug.compile((messageIn), {})(message)
    }
  }

  render() {
    return this.props.messages ? this.props.messages.map(this.getMessageslist).join(`\n`) : pug.compile((`div`), {})([])
  }
}