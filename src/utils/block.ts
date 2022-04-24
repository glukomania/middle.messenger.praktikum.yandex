import {nanoid} from 'nanoid';
import EventBus from './eventBus';
import * as pug from "pug";

class Block<P = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
    FLOW_CWU: 'flow:component-will-unmount',
  } as const;
  
  public id = nanoid(6);
  private _element: HTMLElement | null = null;
  private _meta: { tagName: string, props: any };
  public props: any;
  private eventBus: () => EventBus;
  
  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  
  constructor(tagName: string = 'div', props: any = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };
        
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _checkInDom() {
    const elementInDOM = document.body.contains(this._element);

    if (elementInDOM) {
      setTimeout(() => this._checkInDom(), 1000);
      return;
    }

    this.eventBus().emit(Block.EVENTS.FLOW_CWU, this.props);
  }
  
  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  
  _componentDidMount() {
    this.componentDidMount();
  }

  componentWillUnmount() {}

  _componentWillUnmount() {
    this.eventBus().destroy();
    this.componentWillUnmount();
  }

  componentDidMount() {}

  dispatchComponentDidMoun() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    if (this._element && this._element.style.display === 'none') {
      return;
    }

    if (!this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };
  

  get element(): HTMLElement | null{
    return this._element;
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    if((typeof block) === 'string') {
      this._element!.innerHTML = block;
    } else {
       this._element = block;
    }
    this._addEvents();

  }

  render(): HTMLElement | String | null {
    return this.getContent();
  }

  compile(template, props: Object) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="${child.id}"></div>`
    });

    const fragment = this._createDocumentElement('template');

    fragment.innerHTML = pug.compile(template, propsAndStubs);

    Object.values(this.children).forEach(child => {
        const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
        
        stub.replaceWith(child.getContent());
    });

    return fragment.content;
}

  getContent(): HTMLElement | null {
    return this.element;
  }

  _makePropsProxy(props: any) {    // непонятно
    const self = this;
    
    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value;

        self.eventBus(). emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error('No access');
      },
    });
  }
  
  _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;
    
    if (!events || !this._element) {
      return;
    }
    
    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }
  
  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;
    
    console.log('events', events)
    if (!events) {
      return
    }
    
    Object.entries(events).forEach(([event, listener]) => {
      console.log('this.element', this.element)
      this.element!.addEventListener(event, listener);
    })
  }

  _createDocumentElement(tagName: string): HTMLElement {

    return document.createElement(tagName);
  }

  show() {
    console.log('show!')
    this._element!.style.display = 'flex';
  }

  hide() {
    console.log('hide!')
    this._element!.style.display = 'none';
  }

}

export default Block;