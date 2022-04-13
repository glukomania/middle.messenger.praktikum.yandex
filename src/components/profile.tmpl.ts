export default `
div(class='user-profile-container')
  div(class='profile-avatar-wrapper')
    img(src=avatarSrc, class='profile-avatar')
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
`