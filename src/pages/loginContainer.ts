import Block from "../utils/block";
import LoginInput from "../components/input";
import {validate} from "../utils/validation";
import Login from "../components/login";
import {addToBlock} from "../utils/dom";
import Button from "../components/button";
import LoginForm from "../components/loginForm";
import browserRouter from "../utils/browserRouter"



export default class LoginContainer extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });
  }
  
  render() {
    addToBlock(loginPage, ".login-form-container", loginForm, "login-form")
    addToBlock(loginPage, ".login-form", loginInput, "input-container");
    addToBlock(loginPage, ".login-form", passwordInput, 'input-container');
    addToBlock(loginPage, ".login-form", buttonSubmit, 'input-container')

    return loginPage.getContent();
  }
}

const loginPage = new Login({
  buttonName: "Log in",
  test: () => console.log('click'),
});

const loginForm = new LoginForm({
  events: {
    'submit': (event) => {
      event.preventDefault();

      const router = new browserRouter();

      router.go('/chat')
    }
  },
})

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