import Block from '../utils/block'
const signupFormTmpl = require('./signupForm.pug');


export default class SignupForm extends Block {
 constructor(props: object) {
  super('form', { ...props })
 }

 render() {
  return signupFormTmpl(this.props)
 }
}
