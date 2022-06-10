import * as pug from 'pug'
import Block from '../utils/block'
import header from './header.tmpl'

export default class Header extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['logo_container'] })
 }

 render() {
  // @ts-expect-error
  return pug.compile(header, {})(this.props)
 }
}
