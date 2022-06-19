import Block from '../utils/block'
const logoutButtonTmpl = require('./logoutButton.pug');


export default class LogoutButton extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return logoutButtonTmpl(this.props)
 }
}
