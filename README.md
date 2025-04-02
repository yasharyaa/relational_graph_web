# Relational_Graph_Web
An interactive web simulation for relational graph methodology

## Description
A relational Graph G = (V,E) (where, set V = {v1,...,vn} and edge set E⊆{(vi,vj)|vi,vj ∈V}) is a way of representing neural network as a graph, which focuses on message exchanges between neurons, rather than just the directed flow of data. At each round of message exchange, each node sends messages to its neighbors and aggregates incoming messages from its neighbors. Under this representation, a variety of neural network architectures can be represented via relational graphs. We built a simple interactive web visualisation so interested people can understand the relational graph methodology more easily. 

<div>
  <figure>          
    <img src="https://i.postimg.cc/Kjsbm93d/Screenshot-2025-04-01-165156.png' border='0' alt='Screenshot-2025-04-01-165156" width="300" alt="Image 1" />
  </figure>
  <figure>
    <img src="https://i.postimg.cc/8srHpt0c/Screenshot-2025-04-01-165143.png" width="200" alt="Image 2" />
  </figure>
  <figure>
    <img src="https://i.postimg.cc/0rZQhs8q/Screenshot-2025-04-01-165128.png" width="150" alt="Image 2" />
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
