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
      await authAPI.signUp(payload);
      await this.getUser()

      window.router.enterAuth(true).start();
    } catch (e) {
      alert(e);
    }
  }

  public async login(payload): Promise<void> {
    try {
      await authAPI.login(payload)?.then(response => {
          console.log('resp', response)
          if (response.status === 200 || response.status === 400 && response.responseText.includes('User already in system')){
            this.getUser().then(() => window.router.go("/chat"))
          } else {
            throw Error('authentification failed')
          }
        })
    } catch (e) {
      console.log('service', e);
      window.router.go("/")
    }
  }

  public async logout(): Promise<void> {
    try {
      await authAPI.logout();
      store.dispatch({'user': null});
      window.router.enterAuth(false).start();
      window.router.go('/login');
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthServices();
