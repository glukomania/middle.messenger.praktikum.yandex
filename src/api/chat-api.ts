import HTTPTransport from '../utils/HTTPTransport'
import { BaseAPI } from './base-api'

const baseURL = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats')

type AddUser = {
 users: [number]
 chatId: number
}

type CreateChatType = {
 title: string
}

type deleteChatData = {
 chatId: number
}

class ChatAPI extends BaseAPI {
 getChats() {
  return baseURL.get('/')
 }

 createChat(data: CreateChatType) {
  return baseURL.post('/', { data })
 }

 addUser(data: AddUser) {
  return baseURL.put('/users', { data })
 }

 getChatUsers(chatId: number) {
  return baseURL.get(`/${chatId}/users`)
 }

 deleteChat(data: deleteChatData) {
  return baseURL.delete('/', { data })
 }
}

export default new ChatAPI()
