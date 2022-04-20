import {HTTPTransport} from '../utils/HTTPTransport';

const baseURL = new HTTPTransport('https://ya-praktikum.tech/api/v2');


export class BaseAPI {
    constructor() {
        return;
    }

    protected ErrorHandler = (e: Error) => {
        throw new Error(`Transport error ${e}`);
    }

    protected get = (url: string, options) => {
        try {
            return baseURL.get(url, options);
        }
        catch (err) {
            this.ErrorHandler(err as Error);
        }
    }

    protected put = (url: string, options) => {
      try {
          return baseURL.put(url, options);
      }
      catch (err) {
          this.ErrorHandler(err as Error);
      }
  }

    protected post = (url: string, options) => {
        try {
            return baseURL.post(url, options);
        }
        catch (err) {
            this.ErrorHandler(err as Error);
        }
    }

    protected delete = (url: string, options) => {
        try {
            return baseURL.delete(url, options);
        }
        catch (err) {
            this.ErrorHandler(err as Error);
        }
    }
}