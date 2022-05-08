import Block from '../utils/block'
import { addToBlock } from '../utils/dom'
import ProfileModal from '../components/profileModal'
import CloseProfile from '../components/closeProfile'
import { validate } from '../utils/validation'
import EditProfile from '../components/editProfile'
import { validateFields } from '../utils/validation'
import { store } from '../utils/store/store'
import UserServices from '../utils/services/userServices'
import authServices from '../utils/services/authServices'

export default class EditProfileContainer extends Block {
 constructor(props: unknown) {
  super('div', { ...props, classNames: ['login_container'] })
 }

 renderAllPage(user) {
  addToBlock(
   profileModal,
   '.modal-container',
   closeButton,
   'model-close__wrapper',
  )

  const editProfilePage = new EditProfile({
   ...user,
   events: {
    submit: (e) => {
     e.preventDefault()
     const warning = document.querySelector('.warning')

     const target = e.target
     const formData = new FormData(target)

     const dataToSend: object = {
      login: formData.get('login'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      first_name: formData.get('first_name'),
      second_name: formData.get('second_name'),
      display_name: formData.get('display_name'),
      avatar: formData.get('avatar'),
     }

     let isOk: string = ''
     for (let key in dataToSend) {
      if (key.includes('name')) {
       isOk = isOk + validate('name', dataToSend[key])
      } else {
       isOk = isOk + validate(key, dataToSend[key])
      }
     }

     if (isOk === '') {
      UserServices.updateProfile(dataToSend)
      if (formData.get('avatar')) {
       UserServices.changeAvatar(formData)
      }
     } else {
      warning!.textContent = 'Check your data once again'
     }
    },
   },
  })

  addToBlock(
   profileModal,
   '.modal-container',
   editProfilePage,
   'profile-wrapper',
  )
 }

 render() {
  const user = store.getState().user

  if (user) {
   this.renderAllPage(user)
  } else {
   authServices.getUser().then(() => {
    const user = store.getState().user
    this.renderAllPage(user)
   })
  }

  validateFields('names', 'firstName')
  validateFields('names', 'lastName')
  validateFields('email', 'email')
  validateFields('phone', 'phone')
  validateFields('names', 'displayName')
  validateFields('login', 'login')

  return profileModal.getContent()
 }
}

const profileModal = new ProfileModal({})

const closeButton = new CloseProfile({
 classNames: ['model-close__wrapper'],
 events: {
  click: () => window.router.go('/chat'),
 },
})
