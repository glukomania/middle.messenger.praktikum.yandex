import * as pug from "pug";
import Block from "../utils/block";
import chatConversationTmpl from './chatConversation.tmpl';
import chatStub from './chatStub.tmpl'


export default class ChatConversation extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["conversation-wrapper"] });
  }

  render() {
    if (this.props.chatName){
      return pug.compile(chatConversationTmpl, {})(this.props);
     } else {
        return pug.compile(chatStub, {})(this.props);
      }
  }
}