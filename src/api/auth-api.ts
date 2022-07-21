import { BaseApi } from '../utils/HTTPTransport'

interface SignupFormData {
 first_name: string
 second_name: string
 login: string
 password: string
 email: string
 phone: string
 avatar: string
}

interface LoginFormData {
 login: string
 password: string
}

class AuthAPI extends BaseApi {
 constructor() {
  super()
 }

 signUp(data: SignupFormData) {
  return this.post('/auth/signup', { data })
 }

 login(data: LoginFormData) {
  return this.post('/auth/signin', { data })
 }

 getUserInfo() {
  return this.get('/auth/user')
 }

 logout() {
  return this.post('/auth/logout')
 }
}

export const authAPI = new AuthAPI()
