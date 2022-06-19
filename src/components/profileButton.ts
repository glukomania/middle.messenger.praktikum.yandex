import Block from '../utils/block'
const profileButton = require('./profileButton.pug');


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
  return this.compile(
   profileButton,
   {},
  )(this.props)
 }
}
