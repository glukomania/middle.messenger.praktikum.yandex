import * as pug from "pug";
import Block from "../utils/block";
import profileButton from './profileButton.tmpl'


export default class ProfileButton extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["user-container"] });
  }

  render() {
    return pug.compile(profileButton, {})(this.props);
  }
}