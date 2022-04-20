import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import signup from "../components/signup.tmpl";
import Input from '../components/input';
import {validate} from "../utils/validation";
import Button from "../components/button";
import SignupForm from '../components/signupForm'
import Router from '../utils/browserRouter'

export default class Signup extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });
  }

  render() {
    return pug.compile(signup, {})(this.props);
  }
}

const signupPage = new Signup({
  buttonName: "Sign up",
  classNames: ["container"],
});

const form = new SignupForm({
  type: 'submit',
  classNames: ['signup-form'],
  events: {
    'submit': (event) => {
      event.preventDefault()
      const target = event.target
      const formData = new FormData(target)

      const dataToSend: object = {
        login: formData.get('login'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        firstName: formData.get('firstName'),
        secondName: formData.get('secondName'),
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

      const wariningElement = document.querySelector('.submit-warning')
      console.log('isOk', isOk)
      if (isOk === '') {
        console.log('data can be sent')
        const router = new Router(".app");
        router.go("/profile");
      } else {
        wariningElement?.classList.remove('hidden')

      }
    },
  }
})

const firstNameInput = new Input({
  type: 'text',
  placeholder: 'first name',
  name: 'first_name',
  warningClass: 'firstname-warning warning',
  inputClassName: 'common-input signup-input firstname',
  classNames: ['signup-input-container'],
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.firstname-warning');
      if (warningPlace) warningPlace.textContent = validate('names', ev.srcElement.value)
    },  }
})

const secondNameInput = new Input({
  type: 'text',
  placeholder: 'second name',
  name: 'second_name',
  warningClass: 'secondname-warning warning',
  inputClassName: 'common-input signup-input secondname',
  classNames: ['signup-input-container'],
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.secondname-warning');
      if (warningPlace) warningPlace.textContent = validate('names', ev.srcElement.value)
    }
  }
})

const loginInput = new Input({
  type: 'text',
  placeholder: 'login',
  name: 'login',
  warningClass: 'login-warning warning',
  inputClassName: 'common-input signup-input login',
  classNames: ['signup-input-container'],
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.login-warning');
      if (warningPlace) warningPlace.textContent = validate('login', ev.srcElement.value)
    }
  }
})

const passwordInput = new Input({
  type: 'text',
  placeholder: 'password',
  name: 'password',
  warningClass: 'password-warning warning',
  inputClassName: 'common-input signup-input password',
  classNames: ['signup-input-container'],
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.password-warning');
      if (warningPlace) warningPlace.textContent = validate('password', ev.srcElement.value)
    }
  }
})

const phoneInput = new Input({
  type: 'text',
  placeholder: 'phone',
  name: 'phone',
  warningClass: 'phone-warning warning',
  inputClassName: 'common-input signup-input phone',
  classNames: ['signup-input-container'],
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.phone-warning');
      if (warningPlace) warningPlace.textContent = validate('phone', ev.srcElement.value)
    }
  }
})

const emailInput = new Input({
  type: 'text',
  placeholder: 'email',
  name: 'email',
  warningClass: 'email-warning warning',
  inputClassName: 'common-input signup-input email',
  classNames: ['signup-input-container'],
  events: {
    'focusout': ev => {
      const warningPlace = document.querySelector('.email-warning');
      if (warningPlace) warningPlace.textContent = validate('email', ev.srcElement.value)
    }
  }
})

const buttonSubmit = new Button({
  link: './chat.html',
  buttonName: 'Sign up',
  classNames: ['login-button-container'],
})

renderDOM(".root", signupPage, "container");
renderDOM('.signup-form-container', form, 'signup-form')
renderDOM('.signup-form', firstNameInput, 'signup-input-container')
renderDOM('.signup-form', secondNameInput, 'signup-input-container')
renderDOM('.signup-form', loginInput, 'signup-input-container')
renderDOM('.signup-form', passwordInput, 'signup-input-container')
renderDOM('.signup-form', phoneInput, 'signup-input-container')
renderDOM('.signup-form', emailInput, 'signup-input-container')
renderDOM('.signup-form', buttonSubmit, 'signup-container')
