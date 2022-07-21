import Block from '../utils/block'
const logoutButtonTmpl = require('./logoutButton.pug');

type LogoutButtonProps = {
  events: { click: () => Promise<void>; };
}
export default class LogoutButton extends Block {
 constructor(props: LogoutButtonProps) {
  super('div', { ...props })
 }

 render() {
  return logoutButtonTmpl(this.props)
 }
}
