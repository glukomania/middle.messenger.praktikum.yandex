import {authAPI} from '../../api/auth-api';
import {store} from '../store/store';

class AuthServices {
  public async getUser(): Promise<void> {
    try {
      const user = await authAPI.getUserInfo();
      store.dispatch({'user': JSON.parse(user.response)});
    } catch (e) {
      window.router.enterAuth(false).start();
      window.router.go("/login")
    }
  }

  public async singUp(payload): Promise<void> {

    try {
      await authAPI.signUp(payload)?.then((resp) => {
        if (resp.status < 230) {
          this.getUser().then(() => window.router.go('/chat'))
        }
      })
    } catch (e) {
      console.log('singUp', e);
    }

  }

  public async login(payload): Promise<void> {
    try {
      
      await authAPI.login(payload)?.then(response => {
          if (response.status === 200 || response.status === 400 && response.responseText.includes('User already in system')){
            this.getUser().then(() => window.router.go("/chat"))
          } else {
            throw Error('authentification failed')
          }
        })
    } catch (e) {
      window.router.go("/")
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
        });
        window.router.go('/');
      })

    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthServices();
