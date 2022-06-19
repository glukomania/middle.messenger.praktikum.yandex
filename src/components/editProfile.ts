 import Block from '../utils/block'
const editProfileTmpl = require('./editProfile.pug');


export default class EditProfile extends Block {
 constructor(props: any) {
  super('div', { ...props, classNames: ['user-profile-container'] })
 }

 render() {
  return this.compile(editProfileTmpl, {})(this.props)
 }
}
