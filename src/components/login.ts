import * as pug from 'pug'
import Block from '../utils/block'
import loginTmpl from './login.tmpl'

export default class Login extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  // @ts-expect-error
  return pug.compile(loginTmpl, {})(this.props)
 }
}
