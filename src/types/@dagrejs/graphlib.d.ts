declare module "@dagrejs/graphlib" {
  export type Edge = {
    v: string;
    w: string;
    name: string;
  };

  export interface GraphInterface {
    isDirected(): boolean;
    isMultigraph(): boolean;
    isCompound(): boolean;
    graph(): string | undefined;
    setGraph(label: string): void;
    nodeCount(): number;
    edgeCount(): number;
    setDefaultNodeLabel(val: any): void;
    setDefaultEdgeLabel(val: any): void;
    nodes(): string[];
    edges(): Edge[];
    sources(): string[];
    sinks(): string[];
    hasNode(v: string): boolean;
    node(nodeName: string): any;
    setNode(nodeName: string, nodeLabel: any): void;
    removeNode(nodeName: string): void;

    setEdge(source: string, target: string, edgeLabel: any): void;
    edge(source: string, target: string): any;
    edge(edge: Edge): any;
  }

  export const Graph: new (opt?: {
    directed?: boolean;
    compound?: boolean;
    multigraph?: boolean;
  }) => GraphInterface;

  export type DijkstraResultElement = {
    distance: number;
    predecessor: string;
  };

  export type WeightFunction = (edge: Edge) => number;
  export type EdgeFunction = (v: string) => Edge[];
  export type DijkstraResult = { [target: string]: DijkstraResultElement };
  export type DijkstraAllResult = { [source: string]: DijkstraResult };

  export interface Algorithms {
    components(graph: Graph): string[][];
    dijkstra(
      graph: Graph,
      source: string,
      weightFn?: WeightFunction,
      edgeFn?: EdgeFunction
    ): DijkstraResult;
    dijkstraAll(
      graph: Graph,
      weightFn?: WeightFunction,
      edgeFn?: EdgeFunction
    ): DijkstraAllResult;
    findCycles(graph: Graph): string[][];
    floydWarshall(
      graph: Graph,
      weightFn?: WeightFunction,
      edgeFn?: EdgeFunction
    ): DijkstraAllResult;
    isAcyclic(graph: Graph): boolean;
  }

  export const alg: Algorithms;
}
