// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        // minWidth: '80px',
        // height: '60px',
        // display: 'flex',
        // alignItems: 'center',
        // borderRadius: '8px',
        // backgroundColor: '#1C2536',
        // justifyContent: 'center',
        // flexDirection: 'column'
        background: "linear-gradient(90deg, #5b21b6 0%, #d946ef 100%)",
        borderRadius: "9999px",
        color: "white",
        border: "none",
        padding: "8px 20px",
        fontWeight: "600",
        fontSize: "13px",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 4px 10px rgba(147, 51, 234, 0.3)",
        transition: "transform 0.1s",
      }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
