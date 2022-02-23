import * as pug from "pug";
import Block from "../utils/block";
import deleteChatTmpl from './deleteChat.tmpl'


export default class DeleteChat extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["delete-chat"] });
  }

  render() {
    return pug.compile(deleteChatTmpl, {})(this.props);
  }
}