import Block from "../utils/block";
import {addToBlock} from "../utils/dom";
import renderDOM from "../utils/dom";
import ProfileModal from '../components/profileModal';
import CloseProfile from '../components/closeProfile';
import EditProfileLink from '../components/editProfileLink';
import Profile from '../components/profile';
import ChangePasswodLink from '../components/changePasswordLink'
import ChangePasswod from '../components/ChangePasswod'
import {validate} from "../utils/validation"
import BrowserRouter from '../utils/browserRouter'
import EditProfile from '../components/editProfile';
import {validateFields} from '../utils/validation';
import Router from '../utils/browserRouter';




export default class EditProfileContainer extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });
  }
  
  render() {
    addToBlock(profileModal, ".modal-container", closeButton, "model-close__wrapper")
    addToBlock(profileModal, ".modal-container", editProfilePage, "profile-wrapper");
    addToBlock(profileModal, ".edit-profile-wrapper", editProfileLink, 'profile-options');
    addToBlock(profileModal, ".change-password-wrapper", changePasswodLink, 'change-password-link')

    validateFields('names', 'firstName')
    validateFields('names', 'lastName')
    validateFields('email', 'email')
    validateFields('phone', 'phone')
    validateFields('names', 'displayName')
    validateFields('login', 'login')


    return profileModal.getContent();
  }
}


const profileModal = new ProfileModal({})

const closeButton = new CloseProfile({
  classNames: ['model-close__wrapper']
})

const editProfilePage = new EditProfile ({
  classNames: ['user-profile-container'],
  avatarSrc: 'https://us.123rf.com/450wm/in8finity/in8finity2102/in8finity210200060/163959727-cute-overweight-boy-avatar-character-young-man-cartoon-style-userpic-icon.jpg?ver=6',
  displayName: 'Sashok',
  firstName: 'Aleksandr',
  lastName: 'Vovk',
  email: 'sashok@mail.com',
  login: 'sashok',
  phone: '7771234536',
  events: {
    'submit': (e) => {
      e.preventDefault()
      const warning = document.querySelector('.warning')

      const target = e.target
      const formData = new FormData(target)

      const dataToSend: object = {
        login: formData.get('login'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        firstName: formData.get('first_name'),
        lastName: formData.get('last_name'),
        displayName: formData.get('display_name'),
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
        console.log('data can be sent')
        const router = new Router();

        router
        .go('/chat')

      } else {
        warning!.textContent = 'Check your data once again'
      }

    }
  }
})

const profile = new Profile({
  classNames: ['user-profile-container'],
  avatarSrc: 'https://us.123rf.com/450wm/in8finity/in8finity2102/in8finity210200060/163959727-cute-overweight-boy-avatar-character-young-man-cartoon-style-userpic-icon.jpg?ver=6',
  displayName: 'Sashok',
  firstName: 'Aleksandr',
  lastName: 'Vovk',
  email: 'sashok@mail.com',
  login: 'sashok',
  phone: '777123456',
})

const editProfileLink = new EditProfileLink({
  events: {
    'click': () => {
      const router = new BrowserRouter()
      router.go('/editprofile')
    }
  }
})

const changePassword = new ChangePasswod({
  events: {
    'focusout': () => {
      const warningPlace = document.querySelector('.password-warning');

      const newpassword = (document.getElementById('newpassword') as HTMLInputElement);
      const repeatpassword = (document.getElementById('repeatpassword') as HTMLInputElement);


      if (warningPlace && newpassword && repeatpassword) {
        if (validate('password', newpassword.value) !== '') {
          warningPlace.textContent = validate('password', newpassword.value)
        } else if (validate('password', repeatpassword.value) !== '') {
          warningPlace.textContent = validate('password', repeatpassword.value)
        } else if (newpassword.value !== repeatpassword.value) {
          warningPlace.textContent = 'password and confirm password does not match'
        } else {
          warningPlace.textContent = ''
        }
      }
    },
    'submit': (event) => {
      event.preventDefault()

      const target = event.target
      const formData = new FormData(target)
      
      const dataToSend = {
        password: formData.get('newpassword') ? formData.get('newpassword')?.toString() : '',
        repeatpassword: formData.get('repeatpassword')?.toString(),
      }

      if(dataToSend.password === dataToSend.repeatpassword && validate('password', dataToSend.password) ==='' && validate('password', dataToSend.repeatpassword) === '') {
        console.log('data can be sent')
      } else {
        const warningPlace = document.querySelector('.password-warning');
        warningPlace!.textContent = 'Check the passwords again';
      }
    }
  }
})

const changePasswodLink = new ChangePasswodLink({
  events: {
    'click': () => {
      const hideElement = document.querySelector('.change-password-link')
      hideElement?.classList.add('hidden')
      renderDOM('.change-password-wrapper', changePassword, 'profile-options');
    }
  }
})
