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
import CloseProfile from '../components/closeProfile';
import EditProfile from '../components/editProfile';
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
  avatarUrl: 'https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg',
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



document.addEventListener('DOMContentLoaded', () => {
  const profileButton = new ProfileButton({
    label: 'click me',
    events: {
      click: () =>  {
        console.log('click')
        const modalElement = document.querySelector('.modal-wrapper')
        modalElement?.classList.remove('hidden')
      }
    }
  })

  renderDOM('.options-container', profileButton, 'user-container')
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

document.addEventListener('DOMContentLoaded', () => {
  const closeProfile = new CloseProfile({
    events: {
      click: () => {
        console.log('close modal')
        const modalElement = document.querySelector('.modal-wrapper')
        modalElement?.classList.add('hidden')
      }
    }
  })

  renderDOM('.model-close__wrapper', closeProfile);
});

document.addEventListener('DOMContentLoaded', () => {
  const editProfileLink = new EditProfile({
    events: {
      click: () => {
        console.log('edit profile')

        //open modal afrer page refresh ???
        const modalElement = document.querySelector('.modal-wrapper')
        modalElement?.classList.remove('hidden')

        //hide profile part
        const profileElement = document.querySelector('.profile-wrapper')
        modalElement?.classList.add('hidden')

        //show edit profile part
        const editProfileElement = document.querySelector('.edit-profile-wrapper')
        editProfileElement?.classList.remove('hidden')

      }
    }
  })

  renderDOM('.edit-profile-wrapper', editProfileLink);
});

renderDOM('.root', chatPage, 'container');
renderDOM('.header', header, 'header');
renderDOM('.chats', chatItem, 'user-wrapper');
renderDOM('.user-bar', chatBar, 'user-bar');
renderDOM('.message', messagesList, 'insert');
renderDOM('.root', profileModal);
renderDOM('.modal-container', profile, 'user-profile-container');
