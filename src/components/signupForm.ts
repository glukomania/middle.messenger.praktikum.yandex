import * as pug from "pug";
import Block from "../utils/block";
import formTmpl from './signupForm.tmpl'

export default class SignupForm extends Block {
  constructor(props) {
    super("form", { ...props});
  }

  render() {
    return pug.compile(formTmpl, {})(this.props);
  }
}