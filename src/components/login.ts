import * as pug from 'pug'
import Block from '../utils/block'
import loginTmpl from './login.tmpl'

export default class Login extends Block {
 constructor(props) {
  super('div', { ...props })
 }

 render() {
  return pug.compile(loginTmpl, {})(this.props)
 }
}
