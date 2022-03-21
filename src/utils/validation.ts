export const validate = (type: string, value: string | null | undefined) => {
  const patterns = {
    login: /[a-zA-Z0-9-_]+$/,
    onlyletters: /[a-zA-Z]+$/,
    onlynumbers: /^\d+$/,
    password: /([A-Z]+[0-9]+\w*)$/,
    phone: /^([+]?[0-9]*)$/,
    email: /^([a-z0-9.-]+@[a-z0-9-]+[.]+[a-z]*)$/,
    names: /^([A-Z]+[A-z]*)$/,
  }

  if(value !== null || value !== undefined) {

    switch (type) {
      case 'login':
        
        if (value.length < 3) {
          return 'Your login should have 3 or more symbols.'
        }
        if (value.length >20) {
          return 'Your login should have less than 20 symbols.'
        }

        if (patterns.onlynumbers.test(value)){
          return 'Your login must contain at least one letter'
        }

        if (patterns.login.test(value)) {
          console.log('it is ok')
          return ''
        } else {
          return 'Your login must contain only letters and numbers'
        }
      case 'password':
        if (value.length < 8) {
          return 'Your password is too short'
        }

        if (value.length > 40) {
          return 'Your password is too long'
        }

        if (!patterns.password.test(value)) {
          return 'Your password must contain at least one capital letter and number'
        } else {
          return ''
        }
        
      case 'email':
        if (!patterns.email.test(value)) {
          return 'It seems like your email is incorrect'
        }
        return ''
      case 'phone':
        if (value.length < 10) {
          return 'Your phone is too short. Please check.'
        }
        if (value.length > 15) {
          return 'Your phone is too long. Please check.'
        }

        if (!patterns.phone.test(value)) {
          return 'Phone number should contain only numeric symbols'
        }
        return ''
      case 'names': 
        if (!patterns.names.test(value)) {
          return 'Name must contain only letters and '
        }
        return ''
      case 'message': 
        if (value.length === 0) {
          return 'No message'
        }
        return ''
      default:
        console.log('type', type)
        return 'unknown type'
    }

  } else {
    return 'check the value'
  }
}