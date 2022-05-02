export default `
div(class='conversation-container')
  div(class='conversation-part')
    div(class='user-bar')
      i(class='fa fa-user')
      div(class='user-bar-username') #{chatName}
      div(class='chat-delete')
        i(class='fa fa-times')
    div(class='scroll')
      div(class = 'message')

  div(class='send-part')
    div(class='input-line')
      input(type='text', placeholder='type here', name='message', class='send-input')
      div(class='send-icon')
        i(class='fa fa-send')
`