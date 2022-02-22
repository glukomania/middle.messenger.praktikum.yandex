import * as pug from "pug";
import Block from "../utils/block";
import header from './header.tmpl'

export default class Header extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["header"] });
  }

  render() {
    return pug.compile(header, {})(this.props);
  }
}