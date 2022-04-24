import Block from "../utils/block";
import {addToBlock} from "../utils/dom";
import * as pug from "pug";
import chat from "../templates/chat.tmpl";
import Header from '../components/header';
import ChatItem from '../components/chatItem';
import ChatBar from "../components/chatBar";
import MessagesList from '../components/MessagesList';
import ProfileButton from '../components/profileButton';
import DeleteChat from '../components/deleteChat';



export default class ChatContainer extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });
  }
  
  render() {
    addToBlock(chatPage, ".header", header, "header");
    addToBlock(chatPage, ".options-container", profileButton, 'user-container');

    chats.map((item) => {
      const chatItem = new ChatItem(item)
      addToBlock(chatPage, '.chats', chatItem, 'user-wrapper');
    })


    addToBlock(chatPage, ".user-bar", chatBar, 'user-bar');
    addToBlock(chatPage, ".chat-delete", deleteChat, 'chat-delete');
    addToBlock(chatPage, ".message", messagesList, 'incert');

    return chatPage.getContent() != null ? chatPage.getContent().innerHTML : '';
  }

}

class ChatPage extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["container"] });
  }

  render() {
    return pug.compile(chat, {})(this.props);
  }
}

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

const chatPage = new ChatPage({
  header: "Chat",
  classNames: ["container"],
  chatName: 'Petr',
});

const header = new Header({})

const profileButton = new ProfileButton({
  label: 'click me',
  avatarUrl: 'https://us.123rf.com/450wm/in8finity/in8finity2102/in8finity210200060/163959727-cute-overweight-boy-avatar-character-young-man-cartoon-style-userpic-icon.jpg',
  events: {
    'click': () => console.log('click profile')
  }
})

const chatBar = new ChatBar({
  chatName: 'Ivan',
})

const deleteChat = new DeleteChat({
  events: {
    click: () => console.log('delete chat modal must open')
  }
})

const messagesList = new MessagesList({
  messages,
})
