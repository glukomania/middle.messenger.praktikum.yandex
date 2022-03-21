import * as pug from "pug";
import Block from "../utils/block";
import formTmpl from './form.tmpl'

export default class Form extends Block {
  constructor(props) {
    super("form", { ...props});
  }

  render() {
    return pug.compile(formTmpl, {})(this.props);
  }
}