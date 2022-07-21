import Block from '../utils/block'
const profileTmpl = require('./profile.pug');

type ProfileProps = {
  events: { click: () => Promise<void>; };
}
export default class Profile extends Block {
 constructor(props: ProfileProps) {
  super('div', { ...props })
 }

 render() {
  return profileTmpl(this.props)
 }
}
