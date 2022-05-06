import Block from "../utils/block";
import {addToBlock} from "../utils/dom";
import * as pug from "pug";
import chat from "../components/chat.tmpl";
import Header from '../components/header';
import ChatItem from '../components/chatItem';
import MessagesList from '../components/MessagesList';
import ProfileButton from '../components/profileButton';
import chatServices from "../utils/services/chatServices";
import {store} from '../utils/store/store';
import ChatConversation from "../components/chatConversation";
import authServices from "../utils/services/authServices";
import LogoutButton from "../components/logoutButton";
import messagesServices from "../utils/services/messagesServices";


export default class ChatContainer extends Block {
  constructor(props: any) {
    super("div", { ...props, classNames: ["login_container"] });
  }
  
  scrollToBottom() {
    const element = document.querySelector('.incert');
    console.log('element', element.scrollTop, element.scrollHeight, )
    element.scrollTop = element.scrollHeight
  }

  render() {
    authServices.getUser().then(() => {
      addToBlock(chatPage, ".header", header, "header");

      chatServices.getChats().then(() => {
        const chats = store.getState().chats;
        renderChats(chats)
      })

      const renderChats = (chats) => {
        chats.length > 0 && chats.map((item) => {
          const chatItem = new ChatItem({
            ...item,
            events: {
              'click': () => {
                store.dispatch({'currentChat': item})
                store.dispatch({messages: []})

                messagesServices.getToken(item.id)

                chatServices.getChatUsers(item.id)
                
                chatConversation.setProps({chatName: store.getState().currentChat.title})   
                
                setTimeout(() => {
                  addToBlock(chatPage, ".message", messagesList, 'incert')
                  messagesList.setProps({messages: store.getState().messages})
                }, 1000)
        
                  
                setTimeout(() => this.scrollToBottom(), 2000);

                
              }
            }
          })
          addToBlock(chatPage, '.chats', chatItem, 'user-wrapper');
        })
      }

      const profileButton = new ProfileButton({
        label: 'click me',
        avatarUrl: 'https://ya-praktikum.tech/api/v2/resources' + (store.getState().user && store.getState().user.avatar),
        events: {
          'click': () => window.router.go('/profile')
        }
      })


      addToBlock(chatPage, ".options-container", profileButton, 'user-profile-button');
      addToBlock(chatPage, ".options-container", logoutButton, 'user-logout');
    })

    addToBlock(chatPage, ".chat-wrapper", chatConversation, 'conversation-wrapper')

    return chatPage.getContent();
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

const logoutButton = new LogoutButton({
  events: {
    'click': () => authServices.logout()
  }
})


const chatConversation = new ChatConversation({
  chatName: store.getState().currentChat && store.getState().currentChat?.chatName,
  events: {
    'click': (e) => {
      if (e.srcElement.className === 'fa fa-user-plus') {
        const userId = document.querySelector('.add-user-input')?.value;
        chatServices.addUser({
          "users": [
            userId
          ],
          "chatId": store.getState().currentChat?.id
        })
      }

      if (e.srcElement.className === 'fa fa-send') {
        const messageBox = document.querySelector('.send-input')
        const message = messageBox?.value  

        messagesServices.sendMessageSocket(message)

        setTimeout(() => messagesList.setProps({messages: store.getState().messages}), 1000)

        messageBox!.value = ''


      }
    }

  }
})


const chatPage = new ChatPage({
  header: "Chat",
  classNames: ["container"],
  events: {
    'click': (e) => {
      if (e.srcElement.className === 'fa fa-plus') {
        const chatName = document.querySelector('.chats-name')?.value;
        chatServices.createChat({'title': chatName})
      }
    }}
  });

const header = new Header({})

const messagesList = new MessagesList({
  messages: window.store && window.store.getState().messages,
})