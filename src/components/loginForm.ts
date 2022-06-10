import * as pug from 'pug'
import Block from '../utils/block'
import loginFormTmpl from './loginForm.tmpl'

export default class LoginForm extends Block {
 constructor(props: object) {
  super('form', { ...props })
 }

 render() {
  // @ts-expect-error
  return pug.compile(loginFormTmpl, {})(this.props)
 }
}
