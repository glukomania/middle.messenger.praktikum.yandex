import * as pug from 'pug'
import Block from '../utils/block'
import editProfileLinkTmpl from './editProfileLink.tmpl'

export default class EditProfileLink extends Block {
 constructor(props) {
  super('div', { ...props })
 }

 render() {
  return pug.compile(editProfileLinkTmpl, {})(this.props)
 }
}
