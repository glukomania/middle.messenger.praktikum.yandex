import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from "./base-api";

const baseURL = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

type AddUser = {
  "users": [
    number
  ],
  "chatId": number
}

type CreateChat = {
  "title": string
}



class ChatAPI extends BaseAPI {
  getChats() {
    return baseURL.get("/");
  }

  createChat(data: CreateChat) {
    return baseURL.post('/', {data});
  }

  addUser(data: AddUser) {
    return baseURL.put('/users', {data})
  }

  getChatUsers(chatId: number) {
    return baseURL.get(`/${chatId}/users`)
  }
}

export default new ChatAPI();
