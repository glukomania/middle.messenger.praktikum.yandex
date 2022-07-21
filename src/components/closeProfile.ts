import Block from '../utils/block'
const closeProfileTmpl = require('./closeProfile.pug');

type CloseProfileProps = {
  classNames: string[]; 
  events: { click: () => any; };
}


export default class CloseProfile extends Block {
 constructor(props: CloseProfileProps) {
  super('div', { ...props })
 }

 render() {
  return closeProfileTmpl(this.props)
 }
}
