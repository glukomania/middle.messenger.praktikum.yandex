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

// data to display:

const chats = [
  {
    avatarUrl: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png',
    newMessages: 3,
    chatName: 'Central Park'
  },
  {
    avatarUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man.png',
    newMessages: 1,
    chatName: 'Namesti Miru'
  }
]

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

// render page frame:

const chatPage = new Chat({
  header: "Chat",
  classNames: ["container"],
  chatName: 'Petr',
});

renderDOM('.root', chatPage, 'container');


// render header:

const header = new Header({})
renderDOM('.header', header, 'header');

// render profile button:

const profileButton = new ProfileButton({
  label: 'click me',
  avatarUrl: 'https://us.123rf.com/450wm/in8finity/in8finity2102/in8finity210200060/163959727-cute-overweight-boy-avatar-character-young-man-cartoon-style-userpic-icon.jpg'
})

renderDOM('.options-container', profileButton, 'user-container')


// render chat list:

chats.map((item) => {
  const chatItem = new ChatItem(item)
  renderDOM('.chats', chatItem, 'user-wrapper');
})


// render chat header: 
const chatBar = new ChatBar({
  chatName: 'Ivan',
})

renderDOM('.user-bar', chatBar, 'user-bar');

document.addEventListener('DOMContentLoaded', () => {
  const deleteChat = new DeleteChat({
    events: {
      click: () => console.log('delete chat modal must open')
    }
  })

  renderDOM('.chat-delete', deleteChat, 'chat-delete')
})


// render messages:

const messagesList = new MessagesList({
  messages,
})

renderDOM('.message', messagesList, 'insert');


