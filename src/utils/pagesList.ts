import LoginContainer from '../pages/loginContainer'
import SignupContainer from '../pages/signupContainer'
import ProfileContainer from '../pages/profileContainer'
import Block from './block'

export enum Page {
 Onboarding = 'onboadring',
 Login = 'login',
 Profile = 'profile',
 Signup = 'signup',
}

const map: Record<Page, typeof Block> = {
 [Page.Login]: LoginContainer,
 [Page.Signup]: SignupContainer,
 [Page.Profile]: ProfileContainer,
}

export const getPageComponent = (page: Page): typeof Block => {
 return map[[page]]
}
