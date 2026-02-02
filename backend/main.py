# from fastapi import FastAPI, Form

# app = FastAPI()

# @app.get('/')
# def read_root():
#     return {'Ping': 'Pong'}

# @app.post('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}


from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

# 1. ALLOW CORS (So frontend running on port 3000 can talk to backend on 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

# 2. THE PARSE ENDPOINT
@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    # Parse the JSON body
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    # A. Calculate counts
    num_nodes = len(nodes)
    num_edges = len(edges)

    # B. Build the Graph to check for cycles
    G = nx.DiGraph() # Directed Graph
    
    # Add all nodes by ID
    for node in nodes:
        G.add_node(node['id'])
    
    # Add all edges (source -> target)
    for edge in edges:
        G.add_edge(edge['source'], edge['target'])

    # C. Check if DAG (Directed Acyclic Graph)
    is_dag = nx.is_directed_acyclic_graph(G)

    # Return required format
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }