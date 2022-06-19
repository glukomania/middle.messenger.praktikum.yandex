import Block from '../utils/block'
const signupTmpl = require('./signup.pug');


export default class Signup extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object, classNames: ['login_container'] })
 }

 render() {
  return this.compile(signupTmpl, {})(this.props)
 }
}
