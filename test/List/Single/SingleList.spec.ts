import SingleList from '../../../src/List/Single/SingleList';

describe('SingleList', () => {
  test('add 1M elements', () => {
    const maxSize = 10 ** 6;
    const list = new SingleList<number>();

    for (let elementId = 1; elementId <= maxSize; elementId += 1) {
      list.add(elementId);
    }

    expect(list.getSize()).toBe(maxSize);
  });
});
