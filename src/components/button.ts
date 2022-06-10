import * as pug from 'pug'
import Block from '../utils/block'
import buttonTmpl from './button.tmpl'

export default class Button extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
   // @ts-expect-error
  return pug.compile(buttonTmpl, {})(this.props)
 }
}
