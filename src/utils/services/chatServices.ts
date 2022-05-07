import ChatAPI from '../../api/chat-api';

type AddUsersToChat = {
  "users": [
    number
  ],
  "chatId": number
}
class ChatServices {
  public async getChats(): Promise<void> {
    try {
      const chats = await ChatAPI.getChats()
      window.store.dispatch({'chats': JSON.parse(chats.response)});

    } catch (e) {
      alert(e)
    }
  }

  public async createChat(chatName: any): Promise<void> {
    try {
      await ChatAPI.createChat(chatName);
      await this.getChats()
    } catch (e) {
      console.log('createChat', e);
    }
  }


  public async deleteChat(chatNumber: number): Promise<void> {
    try {
      await ChatAPI.deleteChat(chatNumber);
      await this.getChats()
    } catch (e) {
      console.log('deleteChat', e);
    }
  }

  public async addUser(data: AddUsersToChat): Promise<void> {
    try {
      await ChatAPI.addUser(data);
      this.getChatUsers(window.store.getState().currentChat.id)
    } catch (e) {
      console.log('addUser', e);
    }
  }

  public async getChatUsers(chatId: number): Promise<void> {
    try {
      await ChatAPI.getChatUsers(chatId)
        .then((resp: any) => window.store.dispatch({'chatUsers': JSON.parse(resp.response)}))
    } catch (e) {
      console.log('getChatUsers', e);
    }
  }
}

export default new ChatServices();
