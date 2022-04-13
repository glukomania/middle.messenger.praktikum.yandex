import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import login from "../components/login.tmpl";
import LoginInput from "../components/input";
import {validate} from "../utils/validation";

export default class Login extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["login_container"] });
  }

  render() {
    return pug.compile(login, {})(this.props);
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
    'focusout': ev => {
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