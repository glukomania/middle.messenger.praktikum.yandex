export default `
div(class='user-profile-container')
  div(class='profile-avatar-wrapper')
    img(src=avatar, class='profile-avatar')
  div(class='profile-display-name') #{display_name} (id #{id})
  div(class='profile-info-container')
    div(class='profile-value-container')
      div(class='profile-label') First name
      div(class='profile-value') #{first_name}
    div(class='profile-value-container')
      div(class='profile-label') Last name
      div(class='profile-value') #{second_name}
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
      div(class='profile-value') #{display_name}
  div(class='profile-options')
  block profileOptions
    div(class='edit-profile-wrapper')
    div(class='change-password-wrapper')
`