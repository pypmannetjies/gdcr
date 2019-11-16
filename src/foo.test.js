import Foo from './foo';

describe('foo', () => {
  it('should work', () => {
    let foo = new Foo();
    expect(foo).not.toBeNull();
  });
});
