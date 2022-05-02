import UserAPI from '../../api/user-api';
import {store} from '../store/store';
import Router from "../browserRouter";

class UserServices {
  
  public async updateProfile(data): Promise<void> {
    try {
      await UserAPI.updateProfile(data)
        .then((response) => {
          store.dispatch({'user': JSON.parse(response.response)})
        })
        .then(() => {
          window.profile.setProps({user: window.store.getState().user})
          window.router.go('/profile')
        })
      
    } catch (e) {
      alert(e)
    }
  }

  public async changePassword(data): Promise<void> {
    try {
      await UserAPI.changePassword(data)
        .then(() => {
          const router = new Router();
          router.go('/chat')
        })
        .catch(e => alert(e))
      
    } catch (e) {
      alert(e)
    }
  }

  public async changeAvatar(data): Promise<void> {
    try {
      await UserAPI.uploadAvatar(data)
        .then((response) => {
          window.store.dispatch('user', response.response)
          window.chat.setProps({user: response.response})
        })
        .catch(e => alert(e))
    }
  }

}

export default new UserServices()