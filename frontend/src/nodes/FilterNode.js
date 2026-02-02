//1 input 2 iutputs

import { BaseNode } from './baseNode';
export const FilterNode = ({ id }) => (
  <BaseNode id={id} label="Filter" inputs={['input']} outputs={['pass', 'reject']} />
);