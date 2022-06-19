import Block from '../utils/block'
const logoutButtonTmpl = require('./logoutButton.pug');


export default class LogoutButton extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return this.compile(logoutButtonTmpl, {})(this.props)
 }
}
