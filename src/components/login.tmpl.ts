export default `
div(class='header')
  div(class='logo-container')
    div(class='logo') 
      a(href='./404', class='headerLink') 404 | 
      a(href='./500', class='headerLink') 500
  div(class='options-container')
    div(class='header-options login-link') Log in
    div(class='header-options') |
    div(class="header-options signup-link") 
      a(href='./signup', class='headerLink header-active') Sign up
div(class='main')
  div(class='login_container')
      div(class='login-header') Dogs chat 
          i(class='fa fa-paw')
      div(class='login-form-container')
`