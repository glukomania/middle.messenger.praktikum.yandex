import * as pug from "pug";
import Block from "../utils/block";
import messageOut from './messageOut.tmpl'
import messageIn from './messageIn.tmpl'

export default class MessagesList extends Block {
  constructor(props) {
    super("div", { ...props });
    console.log('props', props)
    this.props = props;
  }

  getMessageslist (message) {
    if (message.user === 'me') {
      return pug.compile((messageOut), {})(message)
    } else {
      return pug.compile((messageIn), {})(message)
    }
  }

  render() {
    return this.props.messages.map(this.getMessageslist).join(`\n`)
  }
}