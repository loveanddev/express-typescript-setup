import add from '../math/add';

describe('add test suite', () => {
  it('add two number', () => {
    expect(add(1, 2)).toBe(3);
  });
});
