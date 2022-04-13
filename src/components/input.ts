import * as pug from "pug";
import Block from "../utils/block";
import inputTmpl from './input.tmpl'


export default class Input extends Block {
  constructor(props) {
    super("div", { ...props});
  }

  render() {
    return pug.compile(inputTmpl, {})(this.props);
  }
}