export default `
div(class='message-container-outcome')
  i(class='fa fa-user')
  div(class='message-outcome')
    div(class='message-text') #{content}
    div(class='message-time') #{time}
`