export default `
form(class='user-profile-container')
  div(class='profile-avatar-wrapper')
    img(src=avatarSrc, class='profile-avatar')
    i(class='fa fa-edit')
  div(class='profile-value-container')
    div(class='profile-label') First name
    div(class='profile-value') 
      input(class='profile-input firstName', type='text', name='first_name', value=firstName, placeholder='first name')
  div(class='profile-value-container')
    div(class='profile-label') Last name
    div(class='profile-value') 
      input(class='profile-input lastName', type='text', name='last_name', value=lastName, placeholder='last name')
  div(class='profile-value-container')
    div(class='profile-label') Email
    div(class='profile-value') 
      input(class='profile-input email', type='text', name='email', value=email, placeholder='email')
  div(class='profile-value-container')
    div(class='profile-label') Phone
    div(class='profile-value')
      input(class='profile-input phone', type='text', name='phone', value=phone, placeholder='phone')
  div(class='profile-value-container')
    div(class='profile-label') Display name
    div(class='profile-value')
      input(class='profile-input displayName', type='text', name='display_name', value=displayName, placeholder='login')
  div(class='profile-value-container')
    div(class='profile-label') Login
    div(class='profile-value')
      input(class='profile-input login', type='text', name='login', value=login, placeholder='name in chat')
  div(class='password-warning warning')
  div(class='profile-button-container')
    input(class='button' type='submit' name='Save')
`