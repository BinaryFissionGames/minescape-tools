import {
  Action,
  Resource,
  Task,
  TaskDependencyGraphEdge,
  TypeInfo
} from "@/logic/solver/types";
import { Graph, GraphInterface } from "@dagrejs/graphlib";

export function solve(
  tasks: Task[],
  startExperience: number,
  endExperience: number,
  taskSwitchPenalty: number
): Action[] {
  return [];
}

function getGeneratorTasksForResource(
  resource: Resource,
  tasks: Task[]
): Task[] {
  return tasks.filter(item =>
    item.resourcesGained.reduce((a, b) => {
      return a || b.name === resource.name;
    }, false as boolean)
  );
}

function getDependencyGraph(tasks: Task[]): GraphInterface {
  const graph = new Graph({
    directed: true
  });

  for (const task of tasks) {
    graph.setNode(task.name, task);
  }

  for (const task of tasks) {
    for (const resource of task.resourcesNeeded) {
      const generatorTasks = getGeneratorTasksForResource(resource, tasks);
      for (const genTask of generatorTasks) {
        graph.setEdge(genTask.name, task.name, {
          time: -1, // Garbage time, will cause error if dijkstra's is attempted without filling the edges
          resourceName: resource.name
        });
      }
    }
  }

  return graph;
}

function getTypeInfoForTask(task: Task): TypeInfo {
  return {
    task,
    totalTime: [],
    totalExperience: 0
  };
}

function averageTimePerTask(task: Task, level: number): number {
  if (task.unlockLevel > level) {
    return 0;
  }

  let averageBankTime = 0;
  if (task.bank) {
    averageBankTime =
      (task.timeToBank + task.timeFromBank) / task.actionsPerBank;
  }

  return averageBankTime + task.timeCostFunction(level);
}

function averageXpPerSec(task: Task, level: number): number {
  const averageTaskTime = averageTimePerTask(task, level);
  return task.experience / averageTaskTime;
}

function fillDependencyGraphEdges(graph: GraphInterface, level: number) {
  for (const edge of graph.edges()) {
    const edgeInfo = graph.edge(edge) as TaskDependencyGraphEdge;
    const fromTask = graph.node(edge.v) as Task;
    const toTask = graph.node(edge.w) as Task;

    const averageTaskTime = averageTimePerTask(fromTask, level);

    const fromResource = fromTask.resourcesGained.find(
      val => val.name === edgeInfo.resourceName
    );
    const toResource = toTask.resourcesNeeded.find(
      val => val.name === edgeInfo.resourceName
    );

    if (!fromResource || !toResource) {
      throw new Error('Cannot find resource "' + edgeInfo.resourceName + '"');
    }

    const iterations = toResource.quantity / fromResource.quantity;

    graph.setEdge(edge.v, edge.w, {
      time: iterations * averageTaskTime,
      resourceName: edgeInfo.resourceName
    });
  }
}
