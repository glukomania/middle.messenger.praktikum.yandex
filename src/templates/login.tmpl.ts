export default `
div(class='header')
  div(class='logo-container')
    div(class='logo invisible') 
      i(class='fa fa-paw') Dogs chat
  div(class='options-container')
    div(class='header-options')
      a(href='', class='headerLink header-active') Log in
    div(class='header-options') |
    div(class="header-options")
      a(href='', class='headerLink') Sign up
div(class='main')
  div(class='login_container')
      div(class='login-header') Dogs chat 
          i(class='fa fa-paw')
      div(class='login-form-container')
          form
              div(class='input-container')
                  input(class='common-input', type='text',  placeholder='login')
              div(class='input-container')
                  input(class='common-input', type='password',  placeholder='password', autocomplete='false')
      div(class='login-button-container')
          a(href='./chat.pug', class='headerLink')
              div(class='button') Sign up

`