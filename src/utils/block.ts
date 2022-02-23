import {nanoid} from 'nanoid';
import EventBus from './eventBus';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  };
  
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
  
  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // _getChildren(propsAndChildren) {
  //   const children = {};
  //   const props = {};

  //   Object.entries(propsAndChildren).forEach(([key, value]) => {
  //     if (Array.isArray(value) && value[0] instanceof Block) {
  //       children[key] = value;
  //     } else {
  //       props[key] = value;
  //     }
  //   });

  //   return { children, props };
  // }

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

  componentDidMount() {}

  dispatchComponentDidMoun() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
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
    this._element!.innerHTML = block;
    this._addEvents();
  }

  render(): string {
    return ''
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
    
    if (!events) {
      return
    }
    
    Object.entries(events).forEach(([event, listener]) => {
      this.element!.addEventListener(event, listener);
    })
  }

  _createDocumentElement(tagName: string): HTMLElement {

    return document.createElement(tagName);
  }

  show() {
    this._element!.style.display = 'block';
  }

  hide() {
    this._element!.style.display = 'none';
  }

}

export default Block;