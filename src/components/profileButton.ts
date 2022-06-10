import * as pug from 'pug'
import Block from '../utils/block'
import profileButton from './profileButton.tmpl'

export default class ProfileButton extends Block {
 constructor(props: object) {
  super('div', { ...props, classNames: ['user-profile-button'] })
 }

//  getNewProps() {
//   return (
//    'https://ya-praktikum.tech/api/v2/resources' +
//    (window.store.getState().user && window.store.getState().user.avatar)
//   )
//  }
 render() {
  return pug.compile(
   profileButton,
   {},
   // @ts-expect-error
  )(this.props)
 }
}
