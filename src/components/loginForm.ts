import Block from '../utils/block'
const loginFormTmpl = require('./loginForm.pug');


export default class LoginForm extends Block {
 constructor(props: object) {
  super('form', { ...props })
 }

 render() {
  return loginFormTmpl(this.props)
 }
}
