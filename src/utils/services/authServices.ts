import { authAPI } from '../../api/auth-api'
import { store } from '../store/store'

class AuthServices {
 public async getUser(): Promise<void> {
  try {
   const user = await authAPI.getUserInfo()
    // @ts-expect-error
   store.dispatch({ user: JSON.parse(user.response)})
    // @ts-expect-error
   const avatar = 'https://ya-praktikum.tech/api/v2/resources' + store.getState().user.avatar

   const userWithAvatar = store.getState().user
   // @ts-expect-error
   userWithAvatar!.avatar = avatar

   store.dispatch({ user: userWithAvatar })
  } catch (e) {
   window.router.start()
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
    if (
     response.status === 200 ||
     (response.status === 400 &&
      response.responseText.includes('User already in system'))
    ) {
     this.getUser().then(() => window.router.go('/chat'))
    } else {
     throw Error('authentification failed')
    }
   })
  } catch (e) {
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
