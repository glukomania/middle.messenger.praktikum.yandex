import * as pug from "pug";
import Block from "../utils/block";
import chatBarTmpl from './chatBar.tmpl'


export default class ChatBar extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["user-bar"] });
  }

  render() {
    return pug.compile(chatBarTmpl, {})(this.props);
  }
}