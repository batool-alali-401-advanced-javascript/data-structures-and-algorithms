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



}


module.exports = Graph;