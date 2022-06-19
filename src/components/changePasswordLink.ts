import Block from '../utils/block'
const changePasswordLinkTmpl = require('./changePasswordLink.pug');

export default class ChangePasswordLink extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return this.compile(changePasswordLinkTmpl, {})(this.props)
 }
}
