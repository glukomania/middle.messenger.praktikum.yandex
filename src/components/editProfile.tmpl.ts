export default `
form(class='user-profile-container')
  div(class='profile-avatar-wrapper')
    input(id="file-input", type="file", name="avatar", style="display: none")
    img(src=avatar, class='profile-avatar', onclick="document.getElementById('file-input').click()")
    i(class='fa fa-edit')
  div(class='profile-value-container')
    div(class='profile-label') First name
    div(class='profile-value') 
      input(class='profile-input firstName', type='text', name='first_name', value=first_name, placeholder='first name')
  div(class='profile-value-container')
    div(class='profile-label') Last name
    div(class='profile-value') 
      input(class='profile-input lastName', type='text', name='second_name', value=second_name, placeholder='second name')
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
      input(class='profile-input displayName', type='text', name='display_name', value=display_name, placeholder='login')
  div(class='profile-value-container')
    div(class='profile-label') Login
    div(class='profile-value')
      input(class='profile-input login', type='text', name='login', value=login, placeholder='name in chat')
  div(class='password-warning warning')
  div(class='profile-button-container')
    input(class='button' type='submit' name='Save')
`