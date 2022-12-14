import ClonableInterface from '../../Util/ClonableInterface';

export default class SingleNode<ValueType> implements ClonableInterface<SingleNode<ValueType>> {
  private nextNode: SingleNode<ValueType> | null = null;

  private value: ValueType | null = null;

  setNextNode(node: SingleNode<ValueType> | null): SingleNode<ValueType> {
    this.nextNode = node;

    return this;
  }

  getNextNode(): SingleNode<ValueType> | null {
    return this.nextNode;
  }

  setValue(value: ValueType | null): SingleNode<ValueType> {
    this.value = value;

    return this;
  }

  getValue(): ValueType | null {
    return this.value;
  }

  clone(): SingleNode<ValueType> {
    const node = new SingleNode<ValueType>();

    node.setValue(this.value);
    node.setNextNode(this.nextNode);

    return node;
  }
}
