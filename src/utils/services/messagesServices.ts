import ChatMessagesAPI from "../../api/messages-api"

class MessagesServices {

  public async getToken(chatId: number): Promise<void> {
    try {
      await ChatMessagesAPI.getToken(chatId)
        .then((response) => {
          window.store.dispatch({'token': JSON.parse((response as object).response).token});
        })
        .then(() => {
          this.launchSocket(store.getState().user.id, store.getState().currentChat.id)
        })
        .catch(e => console.log('getToken error: ', e))

    } catch (e) {
      alert(e)
    }
  }

  public connectSocket(userId: number, chatId: number) {
    const token = window.store.getState().token;
    return new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`); 
  }

  public launchSocket(userId: number, chatId: number): void {
      const token = window.store.getState().token;
      this.socket =  new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`); 

    this.socket.addEventListener('open', () => {
      this.socket?.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    });

    this.socket.addEventListener('close', () => {
      // this.socket = null;
      console.log('Socket is closed')
    });

    this.socket.addEventListener('message', async (event) => {

      const data = JSON.parse(event.data);

      if (Array.isArray(data)) {
        window.store.dispatch({'messages': data});

      } else if (data.type === 'message') {
        window.store.dispatch({'messages': [data, ...window.store.getState().messages]});
      }
    });
  }

  public closeSocket(chatId: number): void {
    const chat = window.store.getState().currentChat;
    if (this.socket && chatId !== chat?.id) {
      this.socket.close();
      window.store.dispatch('messages', []);
    }
  }

  public sendMessageSocket(message: string): void {

    this.socket.send(JSON.stringify({
      content: message,
      type: 'message',
    }));

  }
}

export default new MessagesServices()