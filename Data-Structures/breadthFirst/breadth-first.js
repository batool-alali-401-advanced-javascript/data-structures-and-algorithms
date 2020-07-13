'use strict';
class Edge {
  constructor(node, weight = 0) {
    this.vertex = node;
    this.weight = weight;
  }
}
class Graph {

  constructor() {
    this._adjancyList = new Map();
  }

  addNode(node) {
    this._adjancyList.set(node, []);
    return this._adjancyList.get(node);
  }

  addEdge(startVertex, endVertex, weight) {
    if (
      !this._adjancyList.has(startVertex) ||
        !this._adjancyList.has(endVertex)
    ) {
      return 'Vertex not found';
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getNodes() {
    for (const [node, edge] of this._adjancyList.entries()) {
      let output = `N >> ${node} | E >> ${edge}`;
      return output;
    }
  }

  getNeighbors(node) {
    if (this._adjancyList.has(node)) {
      return this._adjancyList.get(node);
    } else {
      return 'Vertex not found';
    }
  }

  size() {
    return this._adjancyList.size;
  }

  breadthFirst(start) {
    const queue = [];
    const vistedNodes = [];

    queue.push(start);
    vistedNodes.push(start);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (vistedNodes.includes(neighborNode)) {
          continue;
        } else {
          vistedNodes.push(neighborNode);
        }
        queue.push(neighborNode);
      }

    }


    return vistedNodes;


  }


}


module.exports = Graph;