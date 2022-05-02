import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from "./base-api";

const baseURL = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');


class ChatAPI extends BaseAPI {
  getChats() {
    return baseURL.get("/");
  }

  createChat(data) {
    return baseURL.post('/', {data});
  }

  deleteChat(chatId: number) {
    return baseURL.delete('/',{chatId});
  }
}

export default new ChatAPI();
