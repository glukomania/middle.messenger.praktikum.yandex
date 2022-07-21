import { BaseApi } from '../utils/HTTPTransport'

class ChatMessagesAPI extends BaseApi {
 getToken(chatId: number) {
  return this.post(`/token/${chatId}`, {})
 }
}

export default new ChatMessagesAPI()
