import ListInterface from './ListInterface';

export default abstract class AbstractList<ValueType> implements ListInterface<ValueType> {
  protected size: number = 0;

  abstract add(value: ValueType): void;

  abstract preppend(value: ValueType): void;

  abstract delete(value: ValueType): boolean;

  abstract contains(value: ValueType): boolean;

  abstract print(): void;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }
}
