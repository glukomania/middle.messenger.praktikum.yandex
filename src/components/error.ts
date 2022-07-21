import Block from '../utils/block'
const errorTmpl = require('./error.pug');


type ErrorProps = {
  errorCode: string; 
  errorTitle: string; 
  errorAdvise: string;
}


export default class Error extends Block {
 constructor(props: ErrorProps) {
  super('div', { ...props })
 }

 render() {
  return errorTmpl(this.props)
 }
}
