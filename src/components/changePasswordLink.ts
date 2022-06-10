import * as pug from 'pug'
import Block from '../utils/block'
import changePasswordLinkTmpl from './changePasswordLink.tmpl'

export default class ChangePasswordLink extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
   // @ts-expect-error
  return pug.compile(changePasswordLinkTmpl, {})(this.props)
 }
}
