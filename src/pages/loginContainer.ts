import Block from "../utils/block";
import LoginInput from "../components/input";
import {validate} from "../utils/validation";
import Login from '../components/login'
import {addToBlock} from "../utils/dom";
import Button from "../components/button";
import LoginForm from "../components/loginForm";
import authServices from "../utils/services/authServices";



class LoginContainer extends Block {
  constructor(props: unknown) {
    super("div", { ...props as object, classNames: ["login_container"] });
  }

  componentDidMount() {
    if (window.store.getState().user) {
      window.router.go('/chat');
    }
  }
  
  render() {
    const loginForm = new LoginForm({
      events: {
        'submit': (event: Event) => {
          event.preventDefault();

          const target = event.target
          // @ts-expect-error
          const formData = new FormData(target)
    

          const dataToSend: object = {
            login: formData.get('login'),
            password: formData.get('password'),
          }

          let isOk: boolean = false

          for (let key in dataToSend) {
            if (key.includes('Name')) {
              // @ts-expect-error
              isOk = validate('names', dataToSend[key]) ? true : false
            } else {
              // @ts-expect-error
              isOk = validate(key, dataToSend[key]) ? true : false
            }
          } 
          
          if (!isOk) {
            console.log('loginContainer auth request')
            authServices.login(dataToSend)
          } 
        }
      },
    })

    addToBlock(loginPage, ".login-form-container", loginForm, "login-form")
    addToBlock(loginPage, ".login-form", loginInput, "input-container");
    addToBlock(loginPage, ".login-form", passwordInput, 'input-container');
    addToBlock(loginPage, ".login-form", buttonSubmit, 'input-container')

    return loginPage.getContent();
  }
}

const loginPage = new Login({
  buttonName: "Log in",
  events: {
    'click': (event: any) => {
      if (event.srcElement.className === 'header-options signup-link headerLink') {
        window.router.go('/signup')
       }

      if (event.srcElement.className === '404 headerLink') {
        window.router.go('/err404')
      }

      if (event.srcElement.className === '500 headerLink') {
        window.router.go('/err500')
      }

    }
  }
});

const loginInput = new LoginInput({
  type: 'text',
  placeholder: 'login',
  warningClass: 'login-warning warning',
  inputClassName: 'common-input',
  name: 'login',
  events: {
    'focusout': (ev: any)  => {
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
    'focusout': (ev: any) => {
      const warningPlace = document.querySelector('.password-warning');
      if (warningPlace) warningPlace.textContent = validate('password', ev.srcElement.value);
    }
  }
})

const buttonSubmit = new Button({
  link: './chat',
  buttonName: 'Log in',
  classNames: ['login-button-container']
})

export default LoginContainer