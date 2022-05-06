import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from "./base-api";


const baseURL = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

class ChatMessagesAPI extends BaseAPI {

  getToken(chatId: number) {
    console.log('api')
    return baseURL.post(`/token/${chatId}`)
  }
}

export default new ChatMessagesAPI();
