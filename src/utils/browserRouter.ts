
import renderDOM from './dom';
import Block from './block';



function isEqual(lhs, rhs) {
  return lhs === rhs;
}

export default class BrowserRouter {
  constructor() {
      if (BrowserRouter.__instance) {
          return BrowserRouter.__instance;
      }

      this.isAuth = false;
      this.routes = [];
      this.history = window.history;
      this._currentRoute = null;

      BrowserRouter.__instance = this;
  }

  use(pathname, block, props) {
      const route = new Route(pathname, block, props);
      this.routes.push(route);
      return this;
  }

  start() {
      window.onpopstate = (event => {
        this._onRoute(event.currentTarget.location.pathname);
          
      }).bind(this);

      this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
      let route = this.getRoute(pathname);
      if (!route) {
          return;
      }
      if (this._currentRoute && this._currentRoute !== route) {
          this._currentRoute.leave();
      }

      if (this.isAuth) {
        this.go('/chat');
        return;
      }

      this._currentRoute = route;
      route.render();
  }

  go(pathname: string) {
      this.history.pushState({}, '', pathname);
      this._onRoute(pathname);
  }

  back() {
      this.history.back();
  }

  enterAuth(value: boolean) {
    this.isAuth = value;
    return this;
  }

  forward() {
      this.history.forward();
  }

  getRoute(pathname) {
      const route = this.routes.find(route => route.match(pathname));

      return route || this.routes.find(route => route.match('*'));
  }
}


class Route {
  protected _pathname;
  protected _blockClass;
  protected _block;
  protected _props;

  constructor(pathname: string, view: Block<any>, props: object) {
      this._pathname = pathname;
      this._blockClass = view;
      this._block = null;
      this._props = props;
  }
  navigate(pathname: string) {
      if (this.match(pathname)) {
          this.render();
      }
  }

  leave() {
      if (this._block) {
      this._block.hide();
      }
  }
  match(pathname: string) {
      return isEqual(pathname, this._pathname);
  }
  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      window[this._pathname.replace('/', '')] = this._block
      renderDOM(this._props.selector, this._block, this._props.className)
      return;
    }
    this._block.show();
  }
}