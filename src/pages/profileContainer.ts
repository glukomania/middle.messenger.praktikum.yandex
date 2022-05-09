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
import {store} from '../utils/store/store';
import authServices from "../utils/services/authServices";
import userServices from "../utils/services/userServices";


export default class ProfileContainer extends Block {
  constructor(props: unknown) {
    super("div", { ...props, classNames: ["login_container"] });
  }
  
  render() {
    authServices.getUser().then(() => {
      addToBlock(profileModal, ".modal-container", closeButton, "model-close__wrapper")

      const user = this.props.user || store.getState().user
      
      const profile = new Profile({
        ...user,
        classNames: ['user-profile-container'],
      })
      
      addToBlock(profileModal, ".modal-container", profile, "profile-wrapper");
      addToBlock(profileModal, ".edit-profile-wrapper", editProfileLink, 'profile-options');
      addToBlock(profileModal, ".change-password-wrapper", changePasswodLink, 'change-password-link')
      
      window.profile = profile;
    })
    
    return profileModal.getContent();

  }
}


const profileModal = new ProfileModal({})

const closeButton = new CloseProfile({
  classNames: ['model-close__wrapper'],
  events: {
    'click': () => window.router.go('/chat')
  }
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
        oldPassword: formData.get('newpassword') ? formData.get('newpassword')?.toString() : '',
        newPassword: formData.get('repeatpassword')?.toString(),
      }

      if(validate('password', dataToSend.oldPassword) ==='' && validate('password', dataToSend.newPassword) === '') {
        userServices.changePassword(dataToSend)
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
