import Block from '../utils/block'
const loginTmpl = require('./login.pug');


export default class Login extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return this.compile(loginTmpl, {})(this.props)
 }
}
