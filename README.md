# Relational_Graph_Web
An interactive web simulation for relational graph methodology

## Description
A relational Graph G = (V,E) (where, set V = {v1,...,vn} and edge set E⊆{(vi,vj)|vi,vj ∈V}) is a way of representing a neural network as a graph, which focus on message exchanges between neurons, rather than just the directed flow of data. At each round of mes sage exchange, each node sends messages to its neighbors,and aggregates incoming messages from its neighbors.


<div>
  <figure>          
    <img src="141e948f-d418-4bec-a4b6-2aef76c561a4.png" width="350" alt="Image 1" />
  </figure>
  <figure>
    <img src="bae87c9f-4c18-4ed9-8541-578482b4f4ca.png" width="350" alt="Image 2" />
  </figure>
</div>

### Example
```bash
#example
Nodes = 1280                 #SPECIFY NUMBER OF NODES
communities = 10             #SPECIFY NUMBER OF COMMUNITIES
edge_probability = 0.5       #INTRA-DENSITY, [0,1]
mu =  0.5                    #INTER-DENSITY, [0,1]
G, communities = generate_graph(n = Nodes, c = communities, p = edge_probability, mu = mu)
intra, inter  = density_calculation(G =G , communities = communities)
```

## Benefits
- Faster computation time, computationally inexpensive
- Only depends on 4 variables
- Returns Graph along with average inter & intra density
- Includes visualization of generated community structure

## Installation

```bash
cd simplified_lfr_benchmark_graph
git clone https://github.com/yasharyaa/Simplified_LFR_Benchmark_Graph.git
```

## License

**Simplified_LFR_Benchmark_Graph** is released under the GNU General Public License v3.0. Please see the [LICENSE](LICENSE) file for more information.

## Contributing

We actively welcome your pull requests! Please see [`CONTRIBUTING.md`](docs/CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](docs/CODE_OF_CONDUCT.md) for more info.
