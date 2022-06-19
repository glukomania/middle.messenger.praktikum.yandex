import Block from '../utils/block'
const closeProfileTmpl = require('./closeProfile.pug');


export default class CloseProfile extends Block {
 constructor(props: object) {
  super('div', { ...props })
 }

 render() {
  return this.compile(closeProfileTmpl, {})(this.props)
 }
}
