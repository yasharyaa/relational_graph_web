# Relational_Graph_Web
An interactive web simulation for relational graph methodology

## Description
A relational Graph G = (V,E) (where, set V = {v1,...,vn} and edge set E⊆{(vi,vj)|vi,vj ∈V}) is a way of representing neural network as a graph, which focuses on message exchanges between neurons, rather than just the directed flow of data. At each round of message exchange, each node sends messages to its neighbors and aggregates incoming messages from its neighbors. Under this representation, a variety of neural network architectures can be represented via relational graphs. We built a simple interactive web visualisation so interested people can understand the relational graph methodology more easily. 

We use an n-node relational graph to represent an m-dim layer, then m mod n nodes have ⌊m/n⌋+1 dimensions each, remaining n − (m mod n) nodes will have ⌊m/n⌋ dimensions each.

<div>
  </figure>
  <figure>
    <img src="https://i.postimg.cc/7CfB9NP2/Screenshot-2025-04-01-165128.png' border='0' alt='Screenshot-2025-04-01-165128" width="300" alt="Image 2" />
  </figure>
  <figure>
    <img src="https://i.postimg.cc/jWmMFJCk/Screenshot-2025-04-01-165143.png' border='0' alt='Screenshot-2025-04-01-165143" width="423" alt="Image 2" />
  </figure>
</div>

### Example
```bash
#example
Layer 1 Nodes = 4             #SPECIFY NUMBER OF NODES in Layer 1
Layer 2 Nodes = 4             #SPECIFY NUMBER OF NODES in Layer 2
Use 'Add layer' option to add more layers
Message Exchange Rounds = 3   #SPECIFY ROUNDS OF MESSAGE EXCHANGE
```

## Run the simulation

```bash
git clone https://github.com/yasharyaa/relational_graph_web.git
cd my-app
npm start
```

## License

**Relational_Graph_Web** is released under the GNU General Public License v3.0. Please see the [LICENSE](LICENSE) file for more information.

## Contributing

We actively welcome your pull requests! Please see [`CONTRIBUTING.md`](docs/CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](docs/CODE_OF_CONDUCT.md) for more info.
