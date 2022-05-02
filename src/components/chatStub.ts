import * as pug from "pug";
import Block from "../utils/block";
import chatStub from './chatStub.tmpl'

export default class ChatStub extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["stub-text"] });
  }

  render() {
    return pug.compile(chatStub, {})(this.props);
  }
}