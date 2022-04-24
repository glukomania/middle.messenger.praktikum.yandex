import LoginContainer from '../pages/loginContainer';
import SignupContainer from '../pages/signupContainer';
import ProfileContainer from '../pages/profileContainer'
import  Block  from './block';

export enum Page {
  Onboarding = 'onboadring',
  Login = 'login',
  Profile = 'profile',
  Signup = 'signup',
}

const map: Record<Page, typeof Block> = {
  [Pages.Login]: LoginContainer,
  [Pages.Signup]: SignupContainer,
  [Pages.Profile]: ProfileContainer,
};

export const getScreenComponent = (page: Page): typeof Block => {
  return map[[page]];
};