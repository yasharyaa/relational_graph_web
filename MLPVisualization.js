import React, { useEffect } from 'react';
import * as d3 from 'd3';

const MLPVisualization = ({ layers }) => {
  useEffect(() => {
    const svgWidth = 600;
    const svgHeight = 400;
    const svg = d3.select("#mlp-visualization")
                  .attr("width", svgWidth)
                  .attr("height", svgHeight);

    svg.selectAll("*").remove(); // Clear existing content

    const layerSpacing = svgWidth / (layers.length + 1);

    layers.forEach((layer, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1);
      const ySpacing = svgHeight / (layer.nodes + 1);

      for (let i = 0; i < layer.nodes; i++) {
        const y = ySpacing * (i + 1);

        svg.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 10)
          .style("fill", "steelblue");

        if (layerIndex > 0) {
          const prevLayer = layers[layerIndex - 1];
          const prevX = layerSpacing * layerIndex;
          const prevYSpacing = svgHeight / (prevLayer.nodes + 1);

          for (let j = 0; j < prevLayer.nodes; j++) {
            const prevY = prevYSpacing * (j + 1);

            svg.append("line")
              .attr("x1", prevX)
              .attr("y1", prevY)
              .attr("x2", x)
              .attr("y2", y)
              .attr("stroke", "gray")
              .attr("stroke-width", 1);
          }
        }
      }
    });
  }, [layers]);

  return <svg id="mlp-visualization"></svg>;
};

export default MLPVisualization;
