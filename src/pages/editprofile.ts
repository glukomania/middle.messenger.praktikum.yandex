import renderDOM from "../utils/dom";
import ProfileModal from '../components/profileModal';
import CloseProfile from '../components/closeProfile';
import EditProfile from '../components/editProfile';

const profileModal = new ProfileModal({})

const editProfilePage = new EditProfile ({
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

renderDOM('.root', profileModal);
renderDOM('.modal-container', closeButton, 'model-close__wrapper')
renderDOM('.modal-container', editProfilePage, 'profile-wrapper');
