import Block from '../utils/block'
const profileButton = require('./profileButton.pug');

type ProfileButtonProps = {
  avatarUrl: string;
  events: { click: () => Promise<void>; };
}
export default class ProfileButton extends Block {
 constructor(props: ProfileButtonProps) {
  super('div', { ...props, classNames: ['user-profile-button'] })
 }

 render() {
  return profileButton(this.props)
 }
}
