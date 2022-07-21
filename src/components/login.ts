import Block from '../utils/block'
const loginTmpl = require('./login.pug');

type LoginProps = {
  buttonName: string; 
  // eslint-disable-next-line no-unused-vars
  events: { click: (event: any) => void; };
}

export default class Login extends Block {
 constructor(props: LoginProps) {
  super('div', { ...props })
 }

 render() {
  return loginTmpl(this.props)
 }
}
