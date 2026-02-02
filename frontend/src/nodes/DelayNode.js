//with custom internal state

import { useState } from 'react';
import { BaseNode } from './baseNode';
export const DelayNode = ({ id }) => {
  const [ms, setMs] = useState(1000);
  return (
    <BaseNode id={id} label="Delay" inputs={['input']} outputs={['delayed']}>
      <label>
        Wait: <input type="number" value={ms} onChange={e => setMs(e.target.value)} /> ms
      </label>
    </BaseNode>
  );
};