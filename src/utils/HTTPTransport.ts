enum METHODS {
 GET = 'GET',
 PUT = 'PUT',
 POST = 'POST',
 DELETE = 'DELETE',
}

type Option = {
 timeout?: number
 headers?: object
 method?: METHODS
 data?: any
}

const queryStringify = (data: Record<string, any>): string => {
 if (typeof data !== 'object') {
  throw new Error('Data must be object')
 }

 const keys = Object.keys(data)
 return keys.reduce((result, key, index) => {
  return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
 }, '?')
}

export default class HTTPTransport {
 constructor(readonly _baseURL: string) {}

 get = (url: string, options: Option = {}) => {
  return this.request(url, { ...options, method: METHODS.GET }, options.timeout)
 }

 post = (url: string, options: Option = {}) => {
  return this.request(
   url,
   { ...options, method: METHODS.POST },
   options.timeout,
  )
 }

 put = (url: string, options: Option = {}) => {
  return this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
 }

 delete = (url: string, options: Option = {}) => {
  return this.request(
   url,
   { ...options, method: METHODS.DELETE },
   options.timeout,
  )
 }

 request = (url: string, options: Option = {}, timeout = 5000) => {
  const { headers = {}, method, data } = options
  url = `${this._baseURL}${url}`

  return new Promise((resolve, reject) => {
   if (!method) {
    reject('No method')
    return
   }

   const xhr = new XMLHttpRequest()
   const isGet = method === METHODS.GET

   xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url)

   Object.keys(headers).forEach((key) => {
     // @ts-expect-error
    xhr.setRequestHeader(key, headers[key])
   })

   xhr.onload = function () {
    resolve(xhr)
   }

   xhr.onabort = reject
   xhr.onerror = reject
   xhr.withCredentials = true
   xhr.timeout = timeout
   xhr.ontimeout = reject

   if (isGet || !data) {
    xhr.send()
   } else if (data instanceof FormData) {
    xhr.send(data)
   } else {
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(data))
   }
  })
 }
}
