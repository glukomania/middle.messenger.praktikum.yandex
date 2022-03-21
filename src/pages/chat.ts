import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import chat from "../templates/chat.tmpl";
import Header from '../components/header';
import ChatItem from '../components/chatItem';
import ChatBar from "../components/chatBar";
import MessagesList from '../components/MessagesList';
import ProfileButton from '../components/profileButton';
import DeleteChat from '../components/deleteChat';
import ProfileModal from '../components/profileModal';
import Profile from '../components/profile'

export default class Chat extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["container"] });
  }

  render() {
    return pug.compile(chat, {})(this.props);
  }
}

const messages=[
  {
    message: `how are you?`,
    time: '11:20',
    user: 'me'
  },

  {
    message: `Im going out`,
    time: '11:22',
    user: 'Ivan'
  },
  {
    message: `how are you?`,
    time: '11:20',
    user: 'me'
  },
  {
    message: 'malaria? no way',
    time: '11:22',
    user: 'Ivan'
  }
]

const chatPage = new Chat({
  header: "Chat",
  classNames: ["container"],
  chatName: 'Petr',
});

const header = new Header({})

const chatItem = new ChatItem({
  avatarUrl: 'https://cdn4.vectorstock.com/i/1000x1000/84/68/hipster-man-in-glasses-avatar-profile-userpic-vector-8988468.jpg',
  newMessages: 3,
  chatName: 'Central Park'
})

const chatBar = new ChatBar({
  chatName: 'Ivan',
})

document.addEventListener('DOMContentLoaded', () => {
  const deleteChat = new DeleteChat({
    events: {
      click: () => console.log('delete chat modal must open')
    }
  })

  renderDOM('.chat-delete', deleteChat, 'chat-delete')
})

const messagesList = new MessagesList({
  messages,
})

const profileButton = new ProfileButton({
  label: 'click me',
  // src: '../../static/userpic_example.png'
})

const profileModal = new ProfileModal({})

const profile = new Profile({
  displayName: 'Sashok',
  firstName: 'Aleksandr',
  lastName: 'Vovk',
  email: 'sashok@mail.com',
  login: 'sashok',
  phone: '777123456',
})


renderDOM('.root', chatPage, 'container');
renderDOM('.header', header, 'header');
renderDOM('.options-container', profileButton, 'user-container')
renderDOM('.chats', chatItem, 'user-wrapper');
renderDOM('.user-bar', chatBar, 'user-bar');
renderDOM('.message', messagesList, 'insert');
