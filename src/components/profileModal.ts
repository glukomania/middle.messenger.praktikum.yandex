import * as pug from 'pug'
import Block from '../utils/block'
import profileModalTmpl from './profileModal.tmpl'

export default class ChatBar extends Block {
 constructor(props) {
  super('div', { ...props })
 }

 render() {
  return pug.compile(profileModalTmpl, {})(this.props)
 }
}
