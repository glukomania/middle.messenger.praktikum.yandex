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
  avatarUrl: 'userpic_example.png',
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
      click: () =>  console.log('click')
    }
  })

  renderDOM('.options-container', profileButton, 'user-container')
})


renderDOM('.root', chatPage, 'container');
renderDOM('.header', header, 'header');
renderDOM('.chats', chatItem, 'user-wrapper');
renderDOM('.user-bar', chatBar, 'user-bar');
renderDOM('.message', messagesList, 'insert');
