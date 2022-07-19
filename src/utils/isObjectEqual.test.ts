
import isObjectEqual from './isObjectEqual'

describe('Validation of isObjectEqual', function () {
  test('positive test', () => {
      expect(isObjectEqual({test: 1, tost: 2}, {test: 1, tost: 2})).toEqual(true);
  });
  test('positive test', () => {
    expect(isObjectEqual({test: 1, tost: 3}, {test: 1, tost: 2})).toEqual(false);
});
});
