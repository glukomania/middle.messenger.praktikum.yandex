export default `
div(class='main')
  div(class='error-container')
    div(class='error-logo')
      i(class='fa fa-paw')
    div(class='error-number') #{errorCode}
    div(class='error-title') #{errorTitle}
    div(class='error-advise') #{errorAdvise}
`
