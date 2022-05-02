export default `
i(class='fa fa-user')
div(class='user-bar-username') #{chatName}
div(class='add-user')
  input(type=text, class='common-input', value='', placeholder='Type user id')
  i(class='fa fa-plus')
div(class='chat-delete')
`