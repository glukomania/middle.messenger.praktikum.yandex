import * as pug from "pug";
import Block from "../utils/block";
import buttonTmpl from './button.tmpl'


export default class Button extends Block {
  constructor(props) {
    super("div", { ...props});
  }

  render() {
    return pug.compile(buttonTmpl, {})(this.props);
  }
}