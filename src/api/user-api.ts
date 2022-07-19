import { BaseApi } from '../utils/HTTPTransport'

class UserAPI extends BaseApi {
 constructor() {
  super()
 }

 uploadAvatar(data: any) {
  return this.put('/user/profile/avatar', { data })
 }

 updateProfile(data: any) {
  return this.put('/user/profile', { data })
 }

 changePassword(data: any) {
  return this.put('/user/password', { data })
 }
}

export default new UserAPI()
