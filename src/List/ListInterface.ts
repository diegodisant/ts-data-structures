export default interface ListInterface<NodeType> {
  add(value: NodeType): void;

  preppend(value: NodeType): void;

  delete(value: NodeType): boolean;

  contains(value: NodeType): boolean;

  print(): void;

  isEmpty(): boolean;

  getSize(): number;
};
