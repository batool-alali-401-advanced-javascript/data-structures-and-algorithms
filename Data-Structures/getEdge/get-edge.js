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

  getEdge(arr){
    let cost=0;
    for (let i=arr.length-1; i>=0; i--) {
      if (this._adjancyList.has(arr[i])) {
        let neighbor=  this._adjancyList.get(arr[i]);
        if (!neighbor.includes(arr[i-1])){
          return 'False, 0$';
        }
      }
      cost=cost+this.weight;
    }
    return `True, ${cost}$`;

  }


}


module.exports = Graph;