import * as pug from 'pug'
import Block from '../utils/block'
import profileTmpl from './profile.tmpl'

export default class Profile extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  // @ts-expect-error
  return pug.compile(profileTmpl, {})(this.props)
 }
}
