import Block from '../utils/block'
const signupFormTmpl = require('./signupForm.pug');

type SignupFormProps = {
  type: string,
  classNames: string[],
  events: object
}


export default class SignupForm extends Block {
 constructor(props: SignupFormProps) {
  super('form', { ...props })
 }

 render() {
  return signupFormTmpl(this.props)
 }
}
