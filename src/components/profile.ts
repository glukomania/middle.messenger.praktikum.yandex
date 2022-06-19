import Block from '../utils/block'
const profileTmpl = require('./profile.pug');


export default class Profile extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return this.compile(profileTmpl, {})(this.props)
 }
}
