import AbstractList from '../AbstractList';

export default class SingleList<NodeType> extends AbstractList<NodeType> {
  add(value: NodeType): void {
    throw new Error('Method not implemented.');
  }

  preppend(value: NodeType): void {
    throw new Error('Method not implemented.');
  }

  delete(value: NodeType): boolean {
    throw new Error('Method not implemented.');
  }

  contains(value: NodeType): boolean {
    throw new Error('Method not implemented.');
  }

  print(): void {
    throw new Error('Method not implemented.');
  }
}
