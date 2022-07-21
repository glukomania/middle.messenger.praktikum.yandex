import Block from '../utils/block'
const button = require('./button.pug');

type ButtonProps = {
  link: string; 
  buttonName: string; 
  classNames: string[];
}
export default class Button extends Block {
 constructor(props: ButtonProps) {
  console.log('props button', props)
  super('div', { ...props })
 }


 render() {
  console.log('props button', this.props)
  return button(this.props)
 }
}
