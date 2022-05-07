import * as pug from "pug";
import Block from "../utils/block";
import logoutButtonTmpl from './logoutButton.tmpl'

export default class LogoutButton extends Block {
  constructor(props) {
    super("div", { ...props});
  }

  render() {
    return pug.compile(logoutButtonTmpl, {})(this.props);
  }
}