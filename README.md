# 🧠 VectorShift Clone - Interactive Pipeline Builder

A fullstack drag-and-drop pipeline builder inspired by [VectorShift](https://www.vectorshift.ai/). Build data processing pipelines with custom nodes (LLM, Input, Text) and visualize graph topology.

## 🚀 Features

- **Drag-and-drop interface** with React Flow
- **Custom node types**: LLM, Text Input, Data Processing
- **Dynamic connections** with auto-generated handles
- **Regex-based parsing** for auto-resizing text inputs
- **Graph validation** using NetworkX (DAG validation, cycle detection)
- **Zustand** for state management
- **FastAPI** backend for graph analysis
## 🏗️ Architecture
vectorshift-clone/
├── frontend/ # React + React Flow + Zustand
│ ├── src/
│ │ ├── components/
│ │ │ ├── nodes/ # Custom node components
│ │ │ ├── Canvas.tsx # Main React Flow canvas
│ │ │ └── ...
│ │ ├── store/ # Zustand state management
│ │ ├── utils/ # Parsing, validation helpers
│ │ └── App.tsx
│ └── package.json
└── backend/ # FastAPI + NetworkX
├── app/
│ ├── api/ # REST endpoints
│ ├── core/ # Graph analysis logic
│ └── models.py
├── main.py # FastAPI app entry
└── requirements.txt


## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, React Flow, Zustand, TypeScript |
| **Backend** | Python 3.10+, FastAPI, NetworkX, Uvicorn |
| **Styling** | Tailwind CSS / CSS Modules |
| **State** | Zustand (frontend), NetworkX graphs (backend) |

## 📦 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.10+ ([Download](https://www.python.org/))
- **npm** or **yarn**

## 🏃 Quick Start

### 1. Clone Repository

git clone https://github.com/dwipju/VectorShift-clone.git
cd VectorShift-clone

2. Backend Setup
   
cd backend

# Create virtual environment
python -m venv venv

# Activate it:
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (optional for local dev)
# Copy .env.example to .env if provided

# Run FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000

3.Frontend Setup

cd ../frontend

# Install dependencies
npm install

# Start development server
npm start



Frontend: http://localhost:3000

4. Connect Them
The frontend should automatically proxy API requests to http://localhost:8000 during development. If not, check frontend/package.json for:

JSON

"proxy": "http://localhost:8000"
🔌 API Endpoints
Method	Endpoint	Description
POST	/api/validate-graph	Validate DAG, detect cycles
POST	/api/analyze	Topology analysis (critical path, etc.)
GET	/api/health	Health check
Example Request:

JSON

POST /api/validate-graph
{
  "nodes": [
    {"id": "1", "type": "input"},
    {"id": "2", "type": "llm"},
    {"id": "3", "type": "text"}
  ],
  "edges": [
    {"source": "1", "target": "2"},
    {"source": "2", "target": "3"}
  ]
}
