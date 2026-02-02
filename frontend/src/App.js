import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { ReactFlowProvider } from "reactflow";

function App() {
  return (
    <ReactFlowProvider>
      <div className="app-layout">
        <PipelineToolbar />
        <PipelineUI />
        <div className="toolbar">
          <SubmitButton />
        </div>
      </div>
    </ReactFlowProvider>
  );
}
export default App;
