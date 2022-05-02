import * as pug from "pug";
import Block from "../utils/block";
import profileButton from './profileButton.tmpl'


export default class ProfileButton extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["user-profile-button"] });
  }

  getNewProps() {
    console.log('window.store.getState()', window.store.getState())
    return 'https://ya-praktikum.tech/api/v2/resources' + (window.store.getState().user && window.store.getState().user.avatar)
  }
  render() {
    return pug.compile(profileButton, {})({...this.props, avatar: this.getNewProps()});
  }
}