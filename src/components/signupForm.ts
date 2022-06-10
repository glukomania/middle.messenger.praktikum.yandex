import * as pug from 'pug'
import Block from '../utils/block'
import formTmpl from './signupForm.tmpl'

export default class SignupForm extends Block {
 constructor(props: object) {
  super('form', { ...props })
 }

 render() {
   // @ts-expect-error
  return pug.compile(formTmpl, {})(this.props)
 }
}
