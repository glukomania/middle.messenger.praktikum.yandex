import * as pug from 'pug'
import Block from '../utils/block'
import inputTmpl from './input.tmpl'

export default class Input extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object })
 }

 render() {
  // @ts-expect-error
  return pug.compile(inputTmpl, {})(this.props)
 }
}
