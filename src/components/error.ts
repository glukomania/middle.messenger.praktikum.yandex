import Block from '../utils/block'
const errorTmpl = require('./error.pug');


export default class Error extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return errorTmpl(this.props)
 }
}
