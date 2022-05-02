import ChatAPI from '../../api/chat-api';

class ChatServices {
  public async getChats(): Promise<void> {
    try {
      const chats = await ChatAPI.getChats()
      window.store.dispatch({'chats': JSON.parse(chats.response)});

    } catch (e) {
      alert(e)
    }
  }

  public async createChat(chatName: string): Promise<void> {
    try {
      await ChatAPI.createChat(chatName);
      await this.getChats()
    } catch (e) {
      alert(e);
    }
  }


  public async deleteChat(chatNumber: number): Promise<void> {
    try {
      await ChatAPI.deleteChat(chatNumber);
      await this.getChats()
    } catch (e) {
      alert(e);
    }
  }
}

export default new ChatServices();
