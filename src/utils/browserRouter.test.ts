import { createBrowserHistory } from 'history';
import BrowserRouter from './browserRouter';
import Block from './block';

const testTmpl = require('./test.pug');


class TestBlock extends Block {
  constructor(props: object) {
   super('div', { ...props })
  }
 
  render() {
   return testTmpl(this.props)
  }
 }

const testBlock = new TestBlock({})

class TestContainer extends Block {
  constructor(props: unknown) {
    super("test-div", { ...props as object, classNames: ["test_container"] });
  }
  
  render() {
    return testBlock.getContent();
  }
}

beforeEach(() => {
    (global as any).window = {
        history: createBrowserHistory(),
    };
});

beforeAll(() => {
    document.body.innerHTML = '<app>\n' + '<div id="app"></div>\n' + '</app>';
});

test('Router is a singlton', () => {
    const router = new BrowserRouter();
    expect(router).toBe(new BrowserRouter());
});

test('Router.use() returns Router', () => {
    const router = new BrowserRouter();
    const result = router.use('', TestContainer, {selector: 'div', className:"test-div"});
    expect(router).toBe(result);
});

test('Router.go() returns Router', () => {
    const router = new BrowserRouter();
    router.use('/test', TestContainer as any, {selector: 'div', className:"test-div"});
    router.go('/test');
    expect(document.querySelector('.test-div')).not.toBe(null);
});