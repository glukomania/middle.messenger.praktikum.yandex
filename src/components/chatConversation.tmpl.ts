export default `
div(class='conversation-container')
  div(class='conversation-part')
    div(class='user-bar')
      i(class='fa fa-user')
      div(class='user-bar-username') #{chatName}
      div(class='add-user')
        input(type=text, class='common-input add-user-input', value='', placeholder='Type user id')
        div(class='plus-icon')
          i(class='fa fa-plus')
  div(class='send-part')
    div(class='input-line')
      input(type='text', placeholder='type here', name='message', class='send-input')
      div(class='send-icon')
        i(class='fa fa-send')
  div(class='scroll')
    div(class = 'message')
`