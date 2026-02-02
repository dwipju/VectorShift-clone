//output only node

import { BaseNode } from './baseNode';
export const DebugLogNode = ({ id }) => (
  <BaseNode id={id} label="Console Log" inputs={['value']}>
    <span style={{ fontSize: '12px', color: '#666' }}>Prints to dev tools</span>
  </BaseNode>
);