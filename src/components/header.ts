import Block from '../utils/block'
const headerTmpl = require('./header.pug');


export default class Header extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['logo_container'] })
 }

 render() {
  return headerTmpl(this.props)
 }
}
