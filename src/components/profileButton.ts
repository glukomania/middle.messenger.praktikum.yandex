import Block from '../utils/block'
const profileButton = require('./profileButton.pug');


export default class ProfileButton extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['user-profile-button'] })
 }

 render() {
  return profileButton(this.props)
 }
}
