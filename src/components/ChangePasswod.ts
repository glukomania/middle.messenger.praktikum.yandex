import Block from '../utils/block'
const changePasswordTmpl = require('./changePassword.pug');


export default class ChangePasswordLink extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object })
 }

 render() {
  return changePasswordTmpl(this.props)
 }
}
