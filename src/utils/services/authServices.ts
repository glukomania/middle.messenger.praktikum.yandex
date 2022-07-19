import { authAPI } from '../../api/auth-api'
import { store } from '../store/store'

class AuthServices {
 public async getUser(): Promise<void> {
  try {
   authAPI.getUserInfo()
    .then(res => {
      // @ts-expect-error
      store.dispatch({ user: JSON.parse(res)})
      console.log('store.getState()', store.getState())
      // @ts-expect-error
    const avatar = 'https://ya-praktikum.tech/api/v2/resources' + store.getState().user.avatar

    console.log('avatar', avatar)
    const userWithAvatar = store.getState().user
    // @ts-expect-error
    userWithAvatar!.avatar = avatar

    store.dispatch({ user: userWithAvatar })

    })
    .catch(err => console.log('getUserInfo err', err))
     
  } catch (e) {
  //  window.router.start()
  alert("getUserInfo reuqest failed")
   window.router.go('/login')
  }
 }

 public async singUp(payload: any): Promise<void> {
  try {
   await authAPI.signUp(payload)?.then(() => {
     this.getUser().then(() => window.router.go('/chat'))
   })
  } catch (e) {
   console.log('singUp', e)
  }
 }

 public async login(payload: any): Promise<void> {
  try {
   await authAPI.login(payload)?.then((response: any) => {
    console.log('auth.login', response)
    if (
     response.status > 250 || 
     response.includes('User already in system')
    ) {
      console.log('redirect to /chat')
      // this.getUser()
      window.router.go('/chat')
    } else {
     throw Error('authentification failed')
    }
   })
  } catch (e) {
    alert('Login request failed')
    window.router.go('/')
  }
 }

 public async logout(): Promise<void> {
  try {
   await authAPI.logout()?.then(() => {
    store.dispatch({
     loginFormError: null,
     user: null,
     currentChat: null,
     messages: [],
    })
    window.router.go('/')
   })
  } catch (e) {
   console.log(e)
  }
 }
}

export default new AuthServices()
