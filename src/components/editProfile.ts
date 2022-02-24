import * as pug from "pug";
import Block from "../utils/block";
import editProfileLinkTmpl from './editProfile.tmpl'

export default class EditProfileLink extends Block {
  constructor(props) {
    super("div", { ...props});
  }
  componentDidMount() {
      console.log('CDM')
      return false
  }

  render() {
    return pug.compile(editProfileLinkTmpl, {})(this.props);
  }
}