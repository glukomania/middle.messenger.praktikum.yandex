import Block from '../utils/block'
import * as pug from 'pug'
import signup from './signup.tmpl'

export default class Signup extends Block {
 constructor(props: any) {
  super('div', { ...props, classNames: ['login_container'] })
 }

 render() {
  return pug.compile(signup, {})(this.props)
 }
}
