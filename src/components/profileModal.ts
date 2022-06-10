import * as pug from 'pug'
import Block from '../utils/block'
import profileModalTmpl from './profileModal.tmpl'

export default class ChatBar extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
   // @ts-expect-error
  return pug.compile(profileModalTmpl, {})(this.props)
 }
}
