export default `
div(class='profile-edit') Change password:
form
  div(class='profile-changePassword') 
    input(class='profile-input newpassword', type='password', id='newpassword', name='newpassword', placeholder='new password')
    input(class='profile-input repeatpassword', type='password', id='repeatpassword', name='repeatpassword', placeholder='repeat password')
  div(class='password-warning warning')
  div(class='profile-button-container')
    input(class='button' type='submit' name='Save')
`
