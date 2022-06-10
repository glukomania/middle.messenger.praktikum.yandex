import block from './block'
import browserRouter from '../utils/browserRouter'

type WithRouterProps = { router: browserRouter }
// @ts-expect-error
export function withRouter<P extends WithRouterProps>(WrappedBlock: block<P>) {
 return class extends WrappedBlock<P> {
  public static componentName = WrappedBlock.componentName || WrappedBlock.name

  constructor(props: P) {
   super({ ...props, router: window.router })
  }
  // @ts-expect-error
 } as block<Omit<P, 'router'>>
}
