import ListInterface from './ListInterface';

export default abstract class AbstractList<NodeType> implements ListInterface<NodeType> {
  protected size: number = 0;

  abstract add(value: NodeType): void;

  abstract preppend(value: NodeType): void;

  abstract delete(value: NodeType): boolean;

  abstract contains(value: NodeType): boolean;

  abstract print(): void;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }
}
