import * as pug from 'pug'
import Block from '../utils/block'
import logoutButtonTmpl from './logoutButton.tmpl'

export default class LogoutButton extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  // @ts-expect-error
  return pug.compile(logoutButtonTmpl, {})(this.props)
 }
}
