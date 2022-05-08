import { BaseAPI } from './base-api'

class UserAPI extends BaseAPI {
 constructor() {
  super()
 }

 uploadAvatar(data) {
  return this.put('/user/profile/avatar', { data })
 }

 updateProfile(data) {
  return this.put('/user/profile', { data })
 }

 changePassword(data) {
  return this.put('/user/password', { data })
 }
}

export default new UserAPI()
