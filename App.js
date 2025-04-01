import React, { useState } from 'react';
import MLPVisualization from './MLPVisualization';
import RelationalGraphVisualization from './RelationalGraphVisualization';
import './App.css';

function App() {
  const [layers, setLayers] = useState([{ nodes: 3 }]); // Initial layer setup
  const [rounds, setRounds] = useState(1); // Number of message exchange rounds

  const addLayer = () => {
    setLayers([...layers, { nodes: 3 }]); // Add a new layer with a default node count
  };

  const updateLayerNodes = (index, value) => {
    const updatedLayers = layers.map((layer, i) =>
      i === index ? { ...layer, nodes: value } : layer
    );
    setLayers(updatedLayers);
  };

  return (
    <div className="App">
      <h1>Relational Graph and MLP Visualization</h1>

      <div className="input-section">
        <h2>Network Configuration</h2>
        {layers.map((layer, index) => (
          <div key={index} className="layer-input">
            <label>Layer {index + 1} Nodes:</label>
            <input
              type="number"
              value={layer.nodes}
              min="1"
              onChange={(e) => updateLayerNodes(index, +e.target.value)}
            />
          </div>
        ))}
        <button onClick={addLayer}>Add Layer</button>

        <div className="rounds-input">
          <label>Message Exchange Rounds:</label>
          <input
            type="number"
            value={rounds}
            min="1"
            onChange={(e) => setRounds(+e.target.value)}
          />
        </div>
      </div>

      <div className="visualization-section">
        <MLPVisualization layers={layers} />
        <RelationalGraphVisualization nodes={layers.reduce((sum, layer) => sum + layer.nodes, 0)} rounds={rounds} />
      </div>
    </div>
  );
}

export default App;
