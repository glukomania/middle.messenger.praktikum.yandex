import renderDOM from "../utils/dom";
import ProfileModal from '../components/profileModal';
import CloseProfile from '../components/closeProfile';
import EditProfileLink from '../components/editProfileLink';
import Profile from '../components/profile';
import ChangePasswodLink from '../components/changePasswordLink'
import ChangePasswod from '../components/ChangePasswod'
import {validate} from "../utils/validation"


const profileModal = new ProfileModal({})

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

const closeButton = new CloseProfile({
  classNames: ['model-close__wrapper']
})

const editProfileLink = new EditProfileLink({
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
        }
        if (validate('password', repeatpassword.value) !== '') {
          warningPlace.textContent = validate('password', repeatpassword.value)
        }

        if (newpassword.value !== repeatpassword.value) {
          warningPlace.textContent = 'password and confirm password does not match'
        }
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

renderDOM('.root', profileModal);
renderDOM('.modal-container', closeButton, 'model-close__wrapper')
renderDOM('.modal-container', profile, 'profile-wrapper');
renderDOM('.edit-profile-wrapper', editProfileLink, 'model-close__wrapper');
renderDOM('.change-password-wrapper', changePasswodLink, 'change-password-link')

