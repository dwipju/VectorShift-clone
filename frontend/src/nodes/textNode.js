import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    
    const matches = [...currText.matchAll(variableRegex)];    
    const variableNames = matches.map(match => match[1]);    
    const uniqueVariables = [...new Set(variableNames)];
    
    setHandles(uniqueVariables.map(name => ({ id: name })));
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    autoResize(e.target);
  };

  const autoResize = (element) => {
    if (!element) return;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    autoResize(textareaRef.current);
  }, []);

  return (
    <BaseNode
      id={id}
      label="Text"
      outputs={[{ id: 'output' }]}
      inputs={handles}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontSize: '12px', color: '#ccc' }}>
          Text:
        </label>
        
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: '100%',
            minHeight: '40px',
            resize: 'none',
            overflow: 'hidden',
            backgroundColor: '#1C1734', 
            color: 'white',
            border: '1px solid #4F46E5',
            borderRadius: '4px',
            padding: '8px',
            fontSize: '12px',
            fontFamily: 'monospace', 
            outline: 'none',
            boxSizing: 'border-box',
            lineHeight: '1.4'
          }}
          placeholder="Type something like {{myVar}}..."
        />
      </div>
    </BaseNode>
  );
};













// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }



// import { useState } from 'react';
// import { BaseNode } from './baseNode';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   return (
//     <BaseNode id={id} label="Text" outputs={['output']}>
//       <label>
//         Text:
//         <input type="text" value={currText} onChange={(e) => setCurrText(e.target.value)} />
//       </label>
//     </BaseNode>
//   );
// };



// src/nodes/textNode.js

