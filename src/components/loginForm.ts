import * as pug from "pug";
import Block from "../utils/block";
import loginFormTmpl from './loginForm.tmpl';

export default class LoginForm extends Block {
  constructor(props) {
    super("form", { ...props});
  }

  render() {
    return pug.compile(loginFormTmpl, {})(this.props);
  }
}