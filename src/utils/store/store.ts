import EventBus from '../eventBus';

export type State = {
  user: User;
  messages: Message[];
  contacts: Contact[];
}

type User = {
  name: string;
}

type Message = {
  messages: object,
  count: Number,
}

type Contact = {
  contacts: object,
}


export enum StoreEvents {
  Updated = 'updated',
}

export type Dispatch<State> = (
  nextStateOrAction: Partial<State> | Action<State>,
  payload?: any,
) => void;

export type Action<State> = (
  dispatch: Dispatch<State>,
  state: State,
  payload: any,
) => void;

export const defaultState = {
  screen: null,
  isLoading: false,
  loginFormError: null,
  user: null,
};


export class Store<State extends Record<string, any>> extends EventBus {
  private state = {} as State;

  constructor(defaultState: State) {
    super();

    this.state = defaultState;
    this.set(defaultState);
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<State>) {
    const prevState = { ...this.state };

    this.state = { ...this.state, ...nextState };

    this.emit('changed', prevState, nextState);
  }

  dispatch(nextStateOrAction: Partial<State> | Action<State>, payload?: any) {
    if (typeof nextStateOrAction === 'function') {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload);
    } else {
      this.set({ ...this.state, ...nextStateOrAction });
    }
  }
}