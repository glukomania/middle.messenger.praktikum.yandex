import { BaseApi } from '../utils/HTTPTransport'

type AddUser = {
 users: [number]
 chatId: number
}

type CreateChatType = {
 title: string
}

class ChatAPI extends BaseApi {
 constructor() {
  super()
 }

 getChats() {
  return this.get('/chats', {})
 }
 

 createChat(data: CreateChatType) {
  return this.post('/chats', { data })
 }

 addUser(data: AddUser) {
  return this.put('/users', { data })
 }

 getChatUsers(chatId: number) {
  return this.get(`/${chatId}/users`, {})
 }

 deleteChat(data: number) {
  return this.delete('/', { data })
 }
}

export default new ChatAPI()
