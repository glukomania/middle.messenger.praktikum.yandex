import block  from './block';
import { browserRouter } from 'core/BrowserRouter';

type WithRouterProps = { router: browserRouter }

export function withRouter<P extends WithRouterProps>(WrappedBlock: block<P>) {
  // @ts-expect-error No base constructor has the specified number of type arguments
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  } as block<Omit<P, 'router'>>;
}