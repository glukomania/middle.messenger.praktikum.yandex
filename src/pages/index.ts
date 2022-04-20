import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import login from "../components/login.tmpl";
import LoginInput from "../components/input";
import {validate} from "../utils/validation";
import {RouterLinks} from '../utils/browserRouter';
import browserRouter from '../utils/browserRouter';
import {Store} from '../utils/store/store';
import { defaultState } from '../utils/store/store';


export enum Pages {
  settings = 'settings',
  Login = 'login',
  Profile = 'profile',
  Chats = 'chats',
  Messanger = 'messanger',
}
export default class Login extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });

    this.setProps({
      formError: () => this.props.store.getState().loginFormError,
      isLoading: () => Boolean(this.props.store.getState().isLoading),
    })
  }

  componentDidMount() {
    if (this.props.store.getState().user) {
      this.props.router.go('/chat')
    }
  }

  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      onLogin: () => {
        // TODO: вынести в отдельный метод

        let hasError = false;
        const loginData = {
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement)
            .value,
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
          },
          values: { ...loginData },
        };

        if (!loginData.login) {
          hasError = true;
          nextState.errors.login = 'Login is required';
        } else if (loginData.login.length < 3) {
          hasError = true;
          nextState.errors.login = 'Login should contain more than 3 chars';
        }

        if (!loginData.password) {
          hasError = true;
          nextState.errors.password = 'Password is required';
        }

        this.setState(nextState);

        if (!hasError) {
          this.props.store.dispatch(login, loginData);
        }
      },
    };
  }

  render() {
    return pug.compile(login, {})(this.props);
  }
}

const loginPage = new Login({
  buttonName: "Log in",
  events: {
    'submit': () => console.log('submit')
  }
});

const loginInput = new LoginInput({
  type: 'text',
  placeholder: 'login',
  warningClass: 'login-warning warning',
  inputClassName: 'common-input',
  name: 'login',
  events: {
    'focusout': ev  => {
      const warningPlace = document.querySelector('.login-warning');
      if (warningPlace) warningPlace.textContent = validate('login', ev.srcElement.value);
    }
  }
})

const passwordInput = new LoginInput({
  type: 'password',
  placeholder: 'password',
  warningClass: 'password-warning warning',
  inputClassName: 'common-input',
  name: 'password',
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.password-warning');
      if (warningPlace) warningPlace.textContent = validate('password', ev.srcElement.value);
    }
  }
})

renderDOM('.root', loginPage, 'container');
renderDOM('.login-form', loginInput, 'input-container');
renderDOM('.login-form', passwordInput, 'input-container');

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store<AppState>(defaultState);
  const router = new browserRouter();

  window.router = router;
  window.store = store;

  store.on('changed', (prevState, nextState) => {
    // router.go(window.location.pathname);
    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM(new Page());
    }
  });

  // router
  //   .use('#login', () => store.dispatch({ screen: RouterLinks.LOGIN }))
  //   .use('#signup', () => store.dispatch({ screen: RouterLinks.SIGNUP }))
  //   .use('#chat', () => store.dispatch({ screen: RouterLinks.CHAT }))
  //   .use('#profile', () => store.dispatch({ screen: RouterLinks.PROFILE }))
  //   .use('#editprofile', () => store.dispatch({ screen: RouterLinks.EDIT_PROFILE }))
  //   .use('#changePassword', () => store.dispatch({ screen: RouterLinks.CHANGE_PASSWORD }))
  //   .use('#404', () => store.dispatch({ screen: RouterLinks.ERROR_404 }))
  //   .use('#500', () => store.dispatch({ screen: RouterLinks.ERROR_500 }))
  //   .use('#', () => store.dispatch({ screen: RouterLinks.LOGIN }))
  //   .onRouteChange();

  //   console.log('store', store)

 router.use('/login', Login, {}).start()



})