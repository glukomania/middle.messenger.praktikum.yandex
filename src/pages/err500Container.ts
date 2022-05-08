import Block from "../utils/block";
import Error from "../components/error";


export default class Err404Container extends Block {
  constructor(props: unknown) {
    super("div", { ...props, classNames: ["login_container"] });
  }
  
  render() {

    return err404Page.getContent();
  }
}

const err404Page = new Error({
  errorCode: '500',
  errorTitle: 'Looks like some cats have been here...',
  errorAdvise: 'We are alredy fixing it!',
});