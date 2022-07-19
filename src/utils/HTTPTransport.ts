enum METHODS {
 GET = 'GET',
 PUT = 'PUT',
 POST = 'POST',
 DELETE = 'DELETE',
}

export interface Option {
  timeout?: number;
  method?: METHODS;
  data?: any;
  headers?: Record<string, string>;
  retries?: number;
  file?: boolean;
}
/**
* Input: object. I.e: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
* Output: string. I.e: ?a=1&b=2&c=[object Object]&k=1,2,3
*/
function queryStringify(data: { [key: string]: any }) {
  const array: string[] = [];
  Object.keys(data).forEach((key) => {
      const param = data[key];
      if (Array.isArray(param)) {
          array.push(`${key}=${param.join(',')}`);
      } else if (typeof param === 'object') {
          array.push(`${key}=${param}`);
      } else if (typeof param === 'boolean') {
          array.push(`${key}=${Boolean(param)}`);
      } else {
          array.push(`${key}=${param}`);
      }
  });
  return `?${array.join('&')}`;
}

export class BaseApi {
  public get(url: string, options: Option) {
      return this.request(url, { ...options, method: METHODS.GET }, options.timeout).catch((err) =>
          console.log(err),
      );
  }

  public post(url: string, options: Option) {
      return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  public put(url: string, options: Option) {
      return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  public delete(url: string, options: Option) {
      return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  private request(url: string, options: Option, timeout = 5000) {
      const host = `https://ya-praktikum.tech/api/v2`;
      return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          if (options.method === METHODS.GET && options.data) {
              xhr.open(options.method, host + url + queryStringify(options.data), true);
          } else {
              xhr.open(options.method as any, host + url, true);
          }

          xhr.onload = function () {
              resolve(xhr.response);
          };
          xhr.withCredentials = true;
          xhr.onabort = reject;

          xhr.timeout = timeout;
          xhr.ontimeout = reject;

          xhr.onerror = () => {
              reject({
                  status: xhr.status,
                  statusText: xhr.statusText,
              });
          };

          if (options.headers) {
              Object.keys(options.headers).forEach((key) => {
                options.headers && xhr.setRequestHeader(key, options.headers[key]);
              });
          } else if (!options.file) {
              xhr.setRequestHeader('Content-Type', 'application/json');
          }

          if (options.data) {
              if (options.file) {
                  xhr.send(options.data as unknown as FormData);
              } else {
                  xhr.send(JSON.stringify(options.data));
              }
          } else {
              xhr.send();
          }
      });
  }
}