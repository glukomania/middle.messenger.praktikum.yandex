export default `
div(class='user-container')
  div(class='user-name-container')
    div(class='user-avatar online')
      img(class='avatar', src=avatarUrl)
    div(class='title') #{chatName}
  div(class='unread_count') #{newMessages}
`