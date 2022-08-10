import AbstractList from '../AbstractList';
import SingleNode from './SingleNode';

export default class SingleList<ValueType> extends AbstractList<ValueType> {
  private rootNode: SingleNode<ValueType> | null = null;

  private headerNode: SingleNode<ValueType> | null = null;

  add(value: ValueType): void {
    this.size += 1;

    const newNode = new SingleNode<ValueType>();

    newNode.setValue(value);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      this.headerNode = newNode;

      return;
    }

    this.headerNode?.setNextNode(newNode);
    this.headerNode = newNode;
  }

  preppend(value: ValueType): void {
    throw new Error('Method not implemented.');
  }

  delete(value: ValueType): boolean {
    throw new Error('Method not implemented.');
  }

  contains(value: ValueType): boolean {
    throw new Error('Method not implemented.');
  }

  print(): void {
    if (this.rootNode === null) {
      return;
    }

    let node = this.rootNode.clone();

    for (;;) {
      console.log(node.getValue());

      const newNode = node.getNextNode();

      if (newNode === null) {
        return;
      }

      node = newNode;
    }
  }
}
