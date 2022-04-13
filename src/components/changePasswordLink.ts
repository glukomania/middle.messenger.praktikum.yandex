import * as pug from "pug";
import Block from "../utils/block";
import changePasswordLinkTmpl from './changePasswordLink.tmpl'

export default class ChangePasswordLink extends Block {
  constructor(props) {
    super("div", { ...props});
  }

  render() {
    return pug.compile(changePasswordLinkTmpl, {})(this.props);
  }
}