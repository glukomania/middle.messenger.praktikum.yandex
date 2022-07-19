// import HTTPTransport from '../utils/HTTPTransport'

// const baseURL = new HTTPTransport('https://ya-praktikum.tech/api/v2')

// export class BaseAPI {
//  constructor() {
//   return
//  }


//  protected get = (url: string, options?: any) => {
//   console.log('url', url)
//   try {
//    return baseURL.get(url, options)
//   } catch (err) {
//     if( err instanceof Error) {
//       console.log('err: ', err)
//     }
//   }
//  }

//  protected put = (url: string, options?: any) => {
//   try {
//    return baseURL.put(url, options)
//   } catch (err) {
//     if( err instanceof Error) {
//       console.log('err: ', err)
//     }
//   }
//  }

//  protected post = (url: string, options?: any) => {
//   try {
//    return baseURL.post(url, options)
//   } catch (err) {
//     if( err instanceof Error) {
//       console.log('err: ', err)
//     }
//   }
//  }

//  protected delete = (url: string, options?: any) => {
//   try {
//    return baseURL.delete(url, options)
//   } catch (err) {
//     if( err instanceof Error) {
//       console.log('err: ', err)
//     }
//   }
//  }
// }
