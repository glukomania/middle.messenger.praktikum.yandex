import * as pug from 'pug'
import Block from '../utils/block'
import closeProfileTmpl from './closeProfile.tmpl'

export default class CloseProfile extends Block {
 constructor(props) {
  super('div', { ...props })
 }

 render() {
  return pug.compile(closeProfileTmpl, {})(this.props)
 }
}
