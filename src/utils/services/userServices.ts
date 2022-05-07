import UserAPI from '../../api/user-api';
import {store} from '../store/store';
import Router from "../browserRouter";

type profileUpdateData = {
  "first_name": "string",
  "second_name": "string",
  "display_name": "string",
  "login": "string",
  "email": "string",
  "phone": "string"
}

type changePasswordData = {
  "oldPassword": "string",
  "newPassword": "string"
}

class UserServices {
  
  public async updateProfile(data: profileUpdateData): Promise<void> {
    try {
      await UserAPI.updateProfile(data)!
        .then((response: any) => {
          store.dispatch({'user': JSON.parse(response.response)})
        })
        .then(() => {
          window.profile.setProps({user: window.store.getState().user})
          window.router.go('/profile')
        })
      
    } catch (e) {
      console.log('updateProfile Error', e)
    }
  }

  public async changePassword(data: changePasswordData): Promise<void> {
    try {
      await UserAPI.changePassword(data)!
        .then(() => {
          const router = new Router();
          router.go('/chat')
        })
        .catch(e => alert(e))
      
    } catch (e) {
      console.log('changePassword Error', e)
    }
  }

  public async changeAvatar(data: any): Promise<void> {
    try {
      await UserAPI.uploadAvatar(data)!
        .then((response: any) => {
          window.store.dispatch('user', response.response)
          window.chat.setProps({user: response.response})
        })
        .catch(err => console.log('uploadAvatar Error', err))
    } catch (e) {
      console.log('changeAvatar Error', e)
    }
  }

}

export default new UserServices()