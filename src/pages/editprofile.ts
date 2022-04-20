import renderDOM from "../utils/dom";
import ProfileModal from '../components/profileModal';
import CloseProfile from '../components/closeProfile';
import EditProfile from '../components/editProfile';
import {validate} from "../utils/validation";
import {validateFields} from '../utils/validation';
import Router from '../utils/browserRouter';


const profileModal = new ProfileModal({})

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

        // router
        // .use("/", Chats)
        // .use("/users", Users)
        // .start();


        router.go("/profile");
      } else {
        warning!.textContent = 'Check your data once again'
      }

    }
  }
})

const closeButton = new CloseProfile({
  classNames: ['model-close__wrapper']
})

renderDOM('.root', profileModal);
renderDOM('.modal-container', closeButton, 'model-close__wrapper')
renderDOM('.modal-container', editProfilePage, 'profile-wrapper');

validateFields('names', 'firstName')
validateFields('names', 'lastName')
validateFields('email', 'email')
validateFields('phone', 'phone')
validateFields('names', 'displayName')
validateFields('login', 'login')
