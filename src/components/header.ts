import Block from '../utils/block'
const headerTmpl = require('./header.pug');

type HeaderProps = {}
export default class Header extends Block {
 constructor(props: HeaderProps) {
  super('div', { ...props, classNames: ['logo_container'] })
 }

 render() {
  return headerTmpl(this.props)
 }
}
