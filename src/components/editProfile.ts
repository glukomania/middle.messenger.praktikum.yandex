 import Block from '../utils/block'
const editProfileTmpl = require('./editProfile.pug');

type EditProfileProps = {
  events: object
}


export default class EditProfile extends Block {
 constructor(props: EditProfileProps) {
  super('div', { ...props, classNames: ['user-profile-container'] })
 }

 render() {
  return editProfileTmpl(this.props)
 }
}
