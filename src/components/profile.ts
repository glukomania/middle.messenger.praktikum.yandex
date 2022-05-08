import * as pug from 'pug'
import Block from '../utils/block'
import profileTmpl from './profile.tmpl'

export default class Profile extends Block {
 constructor(props) {
  super('div', { ...props })
 }

 render() {
  return pug.compile(profileTmpl, {})(this.props)
 }
}
