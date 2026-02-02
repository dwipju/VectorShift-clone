
import { useReactFlow } from 'reactflow'; 

export const SubmitButton = () => {
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });
            const data = await response.json();
            alert(
                `Pipeline Analysis:\n` +
                `------------------\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );

        } catch (error) {
            console.error("Error submitting pipeline:", error);
            alert("Failed to submit pipeline. Check if backend is running.");
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '20px' 
        }}>
            <button
                type="button"
                onClick={handleSubmit}
                style={{
                    background: 'linear-gradient(90deg, #5b21b6 0%, #d946ef 100%)',
                    borderRadius: '9999px',
                    color: 'white',
                    border: 'none',
                    padding: '10px 24px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 4px 10px rgba(147, 51, 234, 0.3)',
                    transition: 'transform 0.1s'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.filter = 'brightness(1)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}