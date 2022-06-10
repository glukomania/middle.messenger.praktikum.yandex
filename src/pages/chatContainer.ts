import Block from '../utils/block'
import { addToBlock } from '../utils/dom'
import * as pug from 'pug'
import chat from '../components/chat.tmpl'
import Header from '../components/header'
import ChatItem from '../components/chatItem'
import MessagesList from '../components/MessagesList'
import ProfileButton from '../components/profileButton'
import chatServices from '../utils/services/chatServices'
import { store } from '../utils/store/store'
import ChatConversation from '../components/chatConversation'
import authServices from '../utils/services/authServices'
import LogoutButton from '../components/logoutButton'
import messagesServices from '../utils/services/messagesServices'

export default class ChatContainer extends Block {
 constructor(props: unknown) {
  super('div', { ...props as object, classNames: ['login_container'] })
 }

 scrollToBottom() {
  const element = document.querySelector('.incert')
  element!.scrollTop = element!.scrollHeight
 }

 renderChatList(chats: any) {
  chats.length > 0 &&
   chats.map((item: any) => {
    const chatItem = new ChatItem({
     ...item,
     events: {
      click: () => {
       store.dispatch({ currentChat: item })
       store.dispatch({ messages: [] })

       messagesServices.getToken(item.id)

       chatServices.getChatUsers(item.id)

       chatConversation.setProps({
         // @ts-expect-error 
        chatName: store.getState().currentChat?.title,
       })

       setTimeout(() => {
        addToBlock(chatPage, '.message', messagesList, 'incert')
        messagesList.setProps({ messages: store.getState().messages })
       }, 1000)

       setTimeout(() => this.scrollToBottom(), 2000)
      },
     },
    })
    addToBlock(chatPage, '.chats', chatItem, 'user-wrapper')
   })
 }

 render() {
  authServices.getUser().then(() => {
   addToBlock(chatPage, '.header', header, 'header')

   chatServices.getChats().then(() => {
    const chats = store.getState().chats
    this.renderChatList(chats)
   })

   const profileButton = new ProfileButton({
     // @ts-expect-error 
    avatarUrl: store.getState().user?.avatar,
    events: {
     click: () => window.router.go('/profile'),
    },
   })

   addToBlock(
    chatPage,
    '.options-container',
    profileButton,
    'user-profile-button',
   )
   addToBlock(chatPage, '.options-container', logoutButton, 'user-logout')
  })

  addToBlock(
   chatPage,
   '.chat-wrapper',
   chatConversation,
   'conversation-wrapper',
  )

  return chatPage.getContent()
 }
}

const logoutButton = new LogoutButton({
 events: {
  click: () => authServices.logout(),
 },
})

const addUserToChat = () => {
  // @ts-expect-error 
 const userId = document.querySelector('.add-user-input')?.value
 
 chatServices
  .addUser({
   users: [userId],
   // @ts-expect-error 
   chatId: store.getState().currentChat?.id,
  })
  .then(() => (userId.value = ''))
}

const sendmessage = () => {
 const messageBox = document.querySelector('.send-input')
 // @ts-expect-error 
 const message: string = messageBox?.value

 messagesServices.sendMessageSocket(message)

 setTimeout(
  () => messagesList.setProps({ messages: store.getState().messages }),
  1000,
 )

 // @ts-expect-error 
 messageBox!.value = ''
}

const addChat = (e: any) => {
 if (e.srcElement.className === 'fa fa-plus') {
   // @ts-expect-error 
  const chatName: string = document.querySelector('.chats-name')?.value
  chatServices.createChat({ title: chatName })
 }
}

class ChatPage extends Block {
 constructor(props: unknown) {
  console.log('props', props)
  super('div', { ...props as object, classNames: ['container'] })
 }

 render() {
  return pug.compile(chat, {})(this.props as object)
 }
}

const chatConversation = new ChatConversation({
 chatName:
 // @ts-expect-error 
  store.getState().currentChat && store.getState().currentChat?.chatName,
 events: {
  click: (e: any) => {
   if (e.srcElement.className === 'fa fa-user-plus') {
    addUserToChat()
   }

   if (e.srcElement.className === 'fa fa-send') {
    sendmessage()
   }
  },
 },
})

const chatPage = new ChatPage({
 header: 'Chat',
 classNames: ['container'],
 events: {
  click: addChat,
 },
})

const header = new Header({})

const messagesList = new MessagesList({
 messages: window.store && window.store.getState().messages,
})
