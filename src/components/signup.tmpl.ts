export default `
div(class='header')
  div(class='logo-container')
  div(class='options-container')
    div(class='header-options')
      a(href='', class='headerLink') Log in
    div(class='header-options') |
    div(class="header-options")
      a(href='', class='headerLink header-active') Sign up
div(class='main')
  div(class='signup-container')
    div(class='signup-form-container')
      form(class='signup-form')
        div(class='signup-title-container')
          div(class='signup-title') Welcome to dogs chat!
        div(class='signup-input-container')
          input(class='common-input signup-input', type='text', name='first_name', placeholder='first name')
        div(class='signup-input-container')
          input(class='common-input signup-input', type='text', name='second_name', placeholder='second name')
        div(class='signup-input-container')
          input(class='common-input signup-input', type='text', name='login', placeholder='login')
        div(class='signup-input-container')
          input(class='common-input signup-input', type='password', name='password', placeholder='password', autocomplete='false')
        div(class='signup-input-container')
          input(class='common-input signup-input', type='text', name='phone', placeholder='phone')
        div(class='signup-input-container')
          input(class='common-input signup-input', type='text', name='email', placeholder='email')
    div(class='login-button-container')
      a(href='./chat.html', class='headerLink')
        div(class='button') #{buttonName}
`