import * as pug from "pug";
import Block from "../utils/block";
import errorTmpl from './error.tmpl'


export default class Error extends Block {
  constructor(props) {
    super("div", { ...props});
  }

  render() {
    console.log('errors.ts')
    return pug.compile(errorTmpl, {})(this.props);
  }
}
