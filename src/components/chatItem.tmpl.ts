export default `
div(class='user-container')
  div(class='user-name-container')
    div(class='user-avatar online')
      img(class='avatar', src=avatar)
    div(class='title') #{title}
  div(class='unread_count') #{unread_count}
`