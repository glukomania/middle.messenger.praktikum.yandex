import Block from '../utils/block'
import Error from '../components/error'

export default class Err404Container extends Block {
 constructor(props: any) {
  super('div', { ...props, classNames: ['login_container'] })
 }

 render() {
  return err404Page.getContent()
 }
}

const err404Page = new Error({
 errorCode: `404`,
 errorTitle: `Ooops, our dogs can't find this page...`,
 errorAdvise: `Please check the URL again`,
})
