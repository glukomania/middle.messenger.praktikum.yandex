import { BaseAPI } from './base-api'

class UserAPI extends BaseAPI {
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
