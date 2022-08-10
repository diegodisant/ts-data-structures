export default interface ListInterface<ValueType> {
  add(value: ValueType): void;

  preppend(value: ValueType): void;

  delete(value: ValueType): boolean;

  contains(value: ValueType): boolean;

  print(): void;

  isEmpty(): boolean;

  getSize(): number;
}
