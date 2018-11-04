/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  let longest = 0;
  
  const graph = prepGraph(times, N, K)
  
  traverse(times, graph[K], graph)
  
  for (let i = 1; i < graph.length; i++) {
      let node = graph[i];
      if (node.time > longest) longest = node.time;
  }
  
  return longest === Infinity ? -1 : longest;
};

var traverse = function(times, node, graph) {
  
  for (let i = 0; i < node.next.length; i++) {
      let edge = node.next[i]
      let toward = graph[edge[0]]
      
      let newCost = node.time + edge[1]
      
      console.log('traverse', node.name, toward.name, toward.time, node.next)

      if (toward.time > newCost) toward.time = newCost;

  }
  
  node.visited = true;
  
  for (let i = 0; i < node.next.length; i++) {
      let nextNode = graph[node.next[i][0]]
      if (!nextNode.visited) {
          traverse(times, nextNode, graph)
      }
  }
  
}

var prepGraph = function(times, N, K) {
  const nodes = [null];
  
  for (let i = 0; i < N; i++) {
      let temp = new Node(i + 1);
      nodes.push(temp);
  }
  
  for (let i = 0; i < times.length; i++) {
      let edge = times[i]
      nodes[edge[0]].next.push([edge[1], edge[2]]);
  }
  nodes[K].time = 0;
  return nodes;
}

var Node = function(name) {
  this.name = name;
  this.next = []
  this.visited = false;
  this.time = Infinity;
  
}
