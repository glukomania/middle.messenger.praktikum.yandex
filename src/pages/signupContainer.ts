import Block from '../utils/block'
import { validate } from '../utils/validation'
import Signup from '../components/signup'
import { addToBlock } from '../utils/dom'
import Input from '../components/input'
import Button from '../components/button'
import SignupForm from '../components/signupForm'
import authServices from '../utils/services/authServices'

type dataToSendType = {
 login: FormDataEntryValue | null
 email: FormDataEntryValue | null
 phone: FormDataEntryValue | null
 first_name: FormDataEntryValue | null
 second_name: FormDataEntryValue | null
 password: FormDataEntryValue | null
}

export default class SignupContainer extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object, classNames: ['login_container'] })
 }

 render() {
  addToBlock(signupPage, '.signup-form-container', form, 'signup-form')
  addToBlock(
   signupPage,
   '.signup-form',
   firstNameInput,
   'signup-input-container',
  )
  addToBlock(
   signupPage,
   '.signup-form',
   secondNameInput,
   'signup-input-container',
  )
  addToBlock(signupPage, '.signup-form', loginInput, 'signup-input-container')
  addToBlock(
   signupPage,
   '.signup-form',
   passwordInput,
   'signup-input-container',
  )
  addToBlock(signupPage, '.signup-form', phoneInput, 'signup-input-container')
  addToBlock(signupPage, '.signup-form', emailInput, 'signup-input-container')
  addToBlock(signupPage, '.signup-form', buttonSubmit, 'signup-container')

  return signupPage.getContent()
 }
}

const signupPage = new Signup({
 buttonName: 'Sign up',
 classNames: ['container'],
 events: {
  'click': (event: any) => {
    console.log('click')
    if (event.srcElement.className === 'headerLink Login') {
      window.router.go('/')
     }
    }
 }
})

const form = new SignupForm({
 type: 'submit',
 classNames: ['signup-form'],
 events: {
  submit: (event: Event) => {
   event.preventDefault()
   const target = event.target
   const formData = new FormData(target as HTMLFormElement)

   const dataToSend: dataToSendType = {
    login: formData.get('login'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    first_name: formData.get('first_name'),
    second_name: formData.get('second_name'),
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

   const wariningElement = document.querySelector('.submit-warning')
   
   if (!isOk) {
    authServices.singUp(dataToSend)
   } else {
    wariningElement?.classList.remove('hidden')
   }
  },
 },
})

const firstNameInput = new Input({
 type: 'text',
 placeholder: 'first name',
 name: 'first_name',
 warningClass: 'firstname-warning warning',
 inputClassName: 'common-input signup-input firstname',
 classNames: ['signup-input-container'],
 events: {
  focusout: (ev: Event) => {
   const warningPlace = document.querySelector('.firstname-warning')
   if (warningPlace)
   // @ts-expect-error
    warningPlace.textContent = validate('names', ev.srcElement.value)
  },
 },
})

const secondNameInput = new Input({
 type: 'text',
 placeholder: 'second name',
 name: 'second_name',
 warningClass: 'secondname-warning warning',
 inputClassName: 'common-input signup-input secondname',
 classNames: ['signup-input-container'],
 events: {
  focusout: (ev: Event) => {
   const warningPlace = document.querySelector('.secondname-warning')
   if (warningPlace)
   // @ts-expect-error
    warningPlace.textContent = validate('names', ev.srcElement.value)
  },
 },
})

const loginInput = new Input({
 type: 'text',
 placeholder: 'login',
 name: 'login',
 warningClass: 'login-warning warning',
 inputClassName: 'common-input signup-input login',
 classNames: ['signup-input-container'],
 events: {
  focusout: (ev: Event) => {
   const warningPlace = document.querySelector('.login-warning')
   if (warningPlace)
   // @ts-expect-error
    warningPlace.textContent = validate('login', ev.srcElement?.value)
  },
 },
})

const passwordInput = new Input({
 type: 'text',
 placeholder: 'password',
 name: 'password',
 warningClass: 'password-warning warning',
 inputClassName: 'common-input signup-input password',
 classNames: ['signup-input-container'],
 events: {
  focusout: (ev: Event) => {
   const warningPlace = document.querySelector('.password-warning')
   if (warningPlace)
   // @ts-expect-error
    warningPlace.textContent = validate('password', ev.srcElement.value)
  },
 },
})

const phoneInput = new Input({
 type: 'text',
 placeholder: 'phone',
 name: 'phone',
 warningClass: 'phone-warning warning',
 inputClassName: 'common-input signup-input phone',
 classNames: ['signup-input-container'],
 events: {
  focusout: (e: any) => {
   const warningPlace = document.querySelector('.phone-warning')
   if (warningPlace)
    warningPlace.textContent = validate('phone', e.srcElement.value)
  },
 },
})

const emailInput = new Input({
 type: 'text',
 placeholder: 'email',
 name: 'email',
 warningClass: 'email-warning warning',
 inputClassName: 'common-input signup-input email',
 classNames: ['signup-input-container'],
 events: {
  focusout: (e: any) => {
   const warningPlace = document.querySelector('.email-warning')
   if (warningPlace)
    warningPlace.textContent = validate('email', e.srcElement.value)
  },
 },
})

const buttonSubmit = new Button({
 link: './chat.html',
 buttonName: 'Sign up',
 classNames: ['login-button-container'],
})
