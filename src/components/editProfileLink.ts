import Block from '../utils/block'
const editProfileLinkTmpl = require('./editProfileLink.pug');


export default class EditProfileLink extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object })
 }

 render() {
  return this.compile(editProfileLinkTmpl, {})(this.props)
 }
}
