import * as pug from "pug";
import Block from "../utils/block";
import editProfileTmpl from './editProfile.tmpl'

export default class EditProfile extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["user-profile-container"] });
  }

  render() {
    return pug.compile(editProfileTmpl, {})(this.props);
  }
}