import * as pug from 'pug'
import Block from '../utils/block'
import errorTmpl from './error.tmpl'

export default class Error extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
   // @ts-expect-error
  return pug.compile(errorTmpl, {})(this.props)
 }
}
