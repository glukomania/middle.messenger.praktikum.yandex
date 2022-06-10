import * as pug from 'pug'
import Block from '../utils/block'
import editProfileLinkTmpl from './editProfileLink.tmpl'

export default class EditProfileLink extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object })
 }

 render() {
  // @ts-expect-error
  return pug.compile(editProfileLinkTmpl, {})(this.props)
 }
}
