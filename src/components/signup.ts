import Block from '../utils/block'
import * as pug from 'pug'
import signup from './signup.tmpl'

export default class Signup extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object, classNames: ['login_container'] })
 }

 render() {
   // @ts-expect-error
  return pug.compile(signup, {})(this.props)
 }
}
