//3 input 1 output
import { BaseNode } from './baseNode';
export const SumNode = ({ id }) => (
  <BaseNode id={id} label="Add Numbers" inputs={['a', 'b', 'c']} outputs={['total']} />
);