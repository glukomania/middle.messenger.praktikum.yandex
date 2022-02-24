export default `
div(class='header')

div(class='main')
  div(class='chat-wrapper')
    div(class='chat-lists-wrapper')
      div(class='chats')
        div(class='chats-header')
          div(class='chats-search-container')
            input(class='common-input chats-search', type='text', name='search', placeholder='Search in chats')
          div(class='chats-add')
            i(class='fa fa-plus')
      

    section(class='conversation-wrapper')
      div(class='conversation-container')
        div(class='conversation-part')
          div(class='user-bar')
          div(class='scroll')
            div(class = 'message')
   
        div(class='send-part')
          div(class='input-line')
            input(type='text', placeholder='type here', name='message', class='send-input')
            div(class='send-icon')
              i(class='fa fa-send')

`