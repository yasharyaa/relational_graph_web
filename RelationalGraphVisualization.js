import React, { useEffect, useState } from 'react';
import Cytoscape from 'cytoscape';

const RelationalGraphVisualization = ({ layers = [], rounds = 1 }) => {
  const nodes = 4; // Fixed to 4-node graph

  // Calculate node dimensions for each layer based on the given rule
  const calculateNodeDimensions = (layerWidths) => {
    return layerWidths.map(width => {
      const baseDim = Math.floor(width / nodes);
      const extraDims = width % nodes;
      return Array.from({ length: nodes }, (_, i) =>
        i < extraDims ? baseDim + 1 : baseDim
      );
    });
  };

  // Initialize node features for each layer based on the dimension distribution
  const nodeDimensions = calculateNodeDimensions(layers);
  const [nodeFeatures, setNodeFeatures] = useState(
    nodeDimensions.map(dimensions => Array(nodes).fill(0).map(() => Math.random()))
  );

  useEffect(() => {
    const messageFunction = (x_i, w_ij) => w_ij * x_i;
    const aggregationFunction = (messages) => messages.reduce((acc, msg) => acc + msg, 0);

    const cy = Cytoscape({
      container: document.getElementById('graph-visualization'),
      elements: [
        ...Array.from({ length: nodes }, (_, i) => ({ data: { id: `node${i}` } })),
        ...Array.from({ length: nodes }, (_, i) =>
          Array.from({ length: nodes }, (_, j) =>
            Array.from({ length: rounds }, (__, r) => ({ 
              data: { id: `edge${i}-${j}-${r}`, source: `node${i}`, target: `node${j}` }
            }))
          )
        ).flat(2)
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#685',
            'label': 'data(label)',
            'width': 30,
            'height': 30,
            'font-size': 12,
            'text-valign': 'center'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc'
          }
        }
      ],
      layout: {
        name: 'grid'
      }
    });

    for (let r = 0; r < layers.length; r++) {
      const currentDimensions = nodeDimensions[r];
      const currentFeatures = nodeFeatures[r];
      const newFeatures = currentFeatures.map((_, i) => {
        const neighbors = cy.nodes().filter(node => node.id() !== `node${i}`).map(node => node.data('feature'));
        const weights = Array.from({ length: neighbors.length }, () => Math.random());
        const messages = neighbors.map((neighborFeature, index) => messageFunction(neighborFeature, weights[index]));
        const aggregatedFeature = aggregationFunction(messages);
        return Math.tanh(aggregatedFeature);
      });

      if (r < layers.length - 1) {
        setNodeFeatures(prevFeatures => {
          const updatedFeatures = [...prevFeatures];
          updatedFeatures[r + 1] = newFeatures;
          return updatedFeatures;
        });
      }

      cy.nodes().forEach(node => {
        const nodeIndex = parseInt(node.id().replace('node', ''));
        // Update label to display only the dimension of the node
        node.data('label', `${currentDimensions[nodeIndex]}`);
      });
    }

    // After all rounds, display the final dimensions
    if (layers.length > 0) {
      cy.nodes().forEach(node => {
        const nodeIndex = parseInt(node.id().replace('node', ''));
        node.data('label', `${nodeDimensions[layers.length - 1][nodeIndex]}`);
      });
    }

  }, [layers, nodeDimensions, nodes, nodeFeatures, rounds]);

  return <div id="graph-visualization" style={{ width: '600px', height: '400px' }} />;
};

export default RelationalGraphVisualization;