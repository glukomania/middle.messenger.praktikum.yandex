import LoginContainer from "./loginContainer";
import browserRouter from "../utils/browserRouter";
import SignupContainer from "./signupContainer";
import ChatContainer from "./chatContainer";
import ProfileContainer from "./profileContainer";
import EditProfileContainer from './editProfileContainer';
import Err404Container from './err404Container';
import Err500Container from './err500Container';
import {store} from '../utils/store/store';
import {withStore} from "../utils/withStore"

document.addEventListener('DOMContentLoaded', () => {
  const router = new browserRouter();
  window.router = router;
  window.store = store;

 router.use('/', LoginContainer, {selector: '.root', className:"login_container"})
       .use('/login', LoginContainer, {selector: '.root', className:"login_container"})
       .use('/signup', SignupContainer, {selector: '.root', className:"login_container"})
       .use('/chat', withStore(ChatContainer), {selector: '.root', className:"container"})
       .use('/profile', ProfileContainer, {selector: '.root', className:"container"})
       .use('/editprofile', EditProfileContainer, {selector: '.root', className:"container"})
       .use('/err404', Err404Container, {selector: '.root', className:"container"})
       .use('/err500', Err500Container, {selector: '.root', className:"container"})
       .start()
})
