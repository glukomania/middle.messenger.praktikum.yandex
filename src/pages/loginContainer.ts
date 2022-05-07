import Block from "../utils/block";
import LoginInput from "../components/input";
import {validate} from "../utils/validation";
import Login from '../components/login'
import {addToBlock} from "../utils/dom";
import Button from "../components/button";
import LoginForm from "../components/loginForm";
import authServices from "../utils/services/authServices";



class LoginContainer extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });
  }

  componentDidMount() {
    if (window.store.getState().user) {
      window.router.go('/chat');
    }
  }
  
  render() {
    const loginForm = new LoginForm({
      events: {
        'submit': (event) => {
          event.preventDefault();

          const target = event.target
          const formData = new FormData(target)
    

          const dataToSend: object = {
            login: formData.get('login'),
            password: formData.get('password'),
          }

          let isOk: string = '';
          for (let key in dataToSend) {
            if (key.includes('Name')) {
              isOk = isOk + validate('names', dataToSend[key])
            } else {
              isOk = isOk + validate(key, dataToSend[key])
            }
          } 

          

          if (isOk === '') {
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

const buttonSubmit = new Button({
  link: './chat',
  buttonName: 'Log in',
  classNames: ['login-button-container']
})

export default LoginContainer