import * as pug from 'pug'
import Block from '../utils/block'
import changePasswordTmpl from './changePassword.tmpl'

export default class ChangePasswordLink extends Block {
 constructor(props: unknown) {
  super('div', { ...props })
 }

 render() {
  return pug.compile(changePasswordTmpl, {})(this.props)
 }
}
