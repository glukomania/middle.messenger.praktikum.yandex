export default `
div(class='profile-wrapper')
  div(class='profile-avatar-wrapper')
    img(src='../../static/userpic_example.png', class='profile-avatar')
  div(class='profile-display-name') #{displayName}
  div(class='profile-info-container')
    div(class='profile-value-container')
      div(class='profile-label') First name
      div(class='profile-value') #{firstName}
    div(class='profile-value-container')
      div(class='profile-label') Last name
      div(class='profile-value') #{lastName}
    div(class='profile-value-container')
      div(class='profile-label') Email
      div(class='profile-value') #{email}
    div(class='profile-value-container')
      div(class='profile-label') Phone
      div(class='profile-value') #{phone}
    div(class='profile-value-container')
      div(class='profile-label') Login
      div(class='profile-value') #{login}
    div(class='profile-value-container')
      div(class='profile-label') Display name
      div(class='profile-value') #{displayName}
  div(class='profile-options')
  block profileOptions
    div(class='edit-profile-wrapper')
    div(class='change-password-wrapper')
      a(href='', class='headerLink')
        div(class='profile-changePassword') Change password
div(class='edit-profile-wrapper hidden')
  div(class='profile-avatar-wrapper')
    img(src='../../static/userpic_example.png', class='profile-avatar')
    i(class='fa fa-edit')
  div(class='profile-value-container')
  div(class='profile-label') First name
  div(class='profile-value') 
    input(class='profile-input', type='text', name='first_name', value='Alexandre', placeholder='first name')
  div(class='profile-value-container')
  div(class='profile-label') Last name
  div(class='profile-value') 
    input(class='profile-input', type='text', name='last_name', value='Vovk', placeholder='last name')
  div(class='profile-value-container')
  div(class='profile-label') Email
  div(class='profile-value') 
    input(class='profile-input', type='text', name='email', value='sashok@mail.mail', placeholder='email')
  div(class='profile-value-container')
  div(class='profile-label') Phone
  div(class='profile-value')
    input(class='profile-input', type='text', name='phone', value='777123456', placeholder='phone')
  div(class='profile-value-container')
  div(class='profile-label') Login
  div(class='profile-value')
    input(class='profile-input', type='text', name='login', value='sashok', placeholder='login')
  div(class='profile-value-container')
  div(class='profile-label') Display name
  div(class='profile-value')
    input(class='profile-input', type='text', name='display_name', value='sashok', placeholder='name in chat')
  div(class='profile-button-container')
  a(href='./profile.pug', class='headerLink')
  div(class='button') Save
`