import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  label,
  inputs = [],
  outputs = [],
  children,
  selected,
}) => {
  return (
    <div
      style={{
        width: 240,
        minHeight: 80,
        height: "auto",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#110D20",
        border: `1px solid ${selected ? "#8B5CF6" : "#4C1D95"}`,
        boxShadow: selected
          ? "0 0 15px 2px rgba(139, 92, 246, 0.5)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
        transition: "all 200ms ease",
      }}
    >
      <div
        style={{
          backgroundColor: "#351E65",
          padding: "8px 12px",
          borderBottom: "1px solid #4C1D95",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {children}
      </div>

      {inputs.map((input) => {
        const config = typeof input === "string" ? { id: input } : input;
        return (
          <Handle
            key={config.id}
            type="target"
            position={Position.Left}
            id={`${id}-${config.id}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#110D20",
              border: "2px solid #8B5CF6",
            }}
            {...config}
          />
        );
      })}

      {outputs.map((output) => {
        const config = typeof output === "string" ? { id: output } : output;
        return (
          <Handle
            key={config.id}
            type="source"
            position={Position.Right}
            id={`${id}-${config.id}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#110D20",
              border: "2px solid #8B5CF6",
              right: -6,
            }}
            {...config}
          />
        );
      })}
    </div>
  );
};





// import { Handle, Position } from 'reactflow';

// export const BaseNode = ({ id, label, inputs = [], outputs = [], children }) => {
//   return (
//     <div style={{ width: 200, height: 80, border: '1px solid black' }}>

//       {/* Auto-render all left input handles */}
//       {inputs.map((input) => {
//         // Accepts simple string IDs OR objects with custom styles
//         const config = typeof input === 'string' ? { id: input } : input;
//         return (
//           <Handle
//             key={config.id}
//             type="target"
//             position={Position.Left}
//             id={`${id}-${config.id}`} // Exact same ID format as your original code
//             {...config}
//           />
//         );
//       })}

//       {/* Shared node structure */}
//       <div><span>{label}</span></div>
//       <div>{children}</div>

//       {/* Auto-render all right output handles */}
//       {outputs.map((output) => {
//         const config = typeof output === 'string' ? { id: output } : output;
//         return (
//           <Handle
//             key={config.id}
//             type="source"
//             position={Position.Right}
//             id={`${id}-${config.id}`}
//             {...config}
//           />
//         );
//       })}

//     </div>
//   );
// };
