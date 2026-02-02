// with custom internal content 

import { BaseNode } from './baseNode';
export const NotifyNode = ({ id }) => (
  <BaseNode id={id} label="Send Alert" inputs={['message']}>
    <select>
      <option>Email</option>
      <option>Slack</option>
      <option>SMS</option>
    </select>
  </BaseNode>
);