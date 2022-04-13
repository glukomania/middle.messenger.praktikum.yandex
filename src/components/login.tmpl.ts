export default `
div(class='header')
  div(class='logo-container')
    div(class='logo') 
      a(href='./err404.html', class='headerLink') 404 | 
      a(href='./err500.html', class='headerLink') 500
  div(class='options-container')
    div(class='header-options')
      a(href='./index.html', class='headerLink header-active') Log in
    div(class='header-options') |
    div(class="header-options")
      a(href='./signup.html', class='headerLink') Sign up
div(class='main')
  div(class='login_container')
      div(class='login-header') Dogs chat 
          i(class='fa fa-paw')
      div(class='login-form-container')
          form(class='login-form')
      div(class='login-button-container')
        div(class='login-button-container')
        a(href='./chat.html', class='headerLink')
          div(class='button') #{buttonName}
`