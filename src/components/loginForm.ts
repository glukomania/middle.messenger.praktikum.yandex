import Block from '../utils/block'
const loginFormTmpl = require('./loginForm.pug');

type LoginFormProps = {
    // eslint-disable-next-line no-unused-vars
  events: { submit: (event: Event) => void; };
}
export default class LoginForm extends Block {
 constructor(props: LoginFormProps) {
  super('form', { ...props })
 }

 render() {
  return loginFormTmpl(this.props)
 }
}
