import Block from '../utils/block'
const changePasswordLinkTmpl = require('./changePasswordLink.pug');


type ChangePasswordProps = {
  events: { click: () => void; };
}

export default class ChangePasswordLink extends Block {
 constructor(props: ChangePasswordProps) {
  super('div', { ...props })
 }

 render() {
  console.log('props button', this.props)

  return changePasswordLinkTmpl(this.props)
 }
}
