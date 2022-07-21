import renderDOM from './dom'
import Block from './block'

function isEqual(lhs: any, rhs: any) {
 return lhs === rhs
}

export default class BrowserRouter {
 static __instance: any
  routes: never[]
  history: History
  private _currentRoute: null
 constructor() {
  if (BrowserRouter.__instance) {
   return BrowserRouter.__instance
  }

  this.routes = []
  this.history = window.history
  this._currentRoute = null

  BrowserRouter.__instance = this
 }

 use(pathname: string, block: any, props: any) {
  const route = new Route(pathname, block, props)
  // @ts-expect-error
  this.routes.push(route)
  return this
 }

 start() {
  window.onpopstate = ((event: any) => {
   this._onRoute(event.currentTarget.location.pathname)
  }).bind(this)

  this._onRoute(window.location.pathname)
 }

 _onRoute(pathname: any) {
  let route = this.getRoute(pathname)
  if (!route) {
   return
  }
  if (this._currentRoute && this._currentRoute !== route) {
    // @ts-expect-error
   this._currentRoute.leave()
  }

  this._currentRoute = route
  // @ts-expect-error
  route.render()
 }

 go(pathname: string) {
  this.history.pushState({}, '', pathname)
  this._onRoute(pathname)
 }

 back() {
  this.history.back()
 }

//  enterAuth(value: boolean) {
//   this.isAuth = value
//   return this
//  }

 forward() {
  this.history.forward()
 }

 getRoute(pathname: any) {
   // @ts-expect-error
  const route = this.routes.find((route) => route.match(pathname))
  // @ts-expect-error
  return route || this.routes.find((route) => route.match('*'))
 }
}

class Route {
 protected _pathname
 protected _blockClass
 // @ts-expect-error
 protected _block
 protected _props
// @ts-expect-error
 constructor(pathname: string, view: Block<any>, props: object) {
  this._pathname = pathname
  this._blockClass = view
  this._block = null
  this._props = props
 }
 navigate(pathname: string) {
  if (this.match(pathname)) {
   this.render()
  }
 }

 leave() {
  if (this._block) {
   this._block.hide()
  }
 }
 match(pathname: string) {
  return isEqual(pathname, this._pathname)
 }
 render() {
  if (!this._block) {
   this._block = new this._blockClass(this._props)
   const blockname: any = this._pathname.replace('/', '')
   window[blockname] = this._block
   // @ts-expect-error
   renderDOM(this._props.selector, this._block, this._props.className)
   return
  }
  this._block.show()
 }
}
