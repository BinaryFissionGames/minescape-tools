import { Resource, Task } from "@/logic/solver/types";
import { Tree } from "@/logic/util/Tree";
import { deepCopy } from "@/logic/util/arrays";

export type TaskAmount = {
  task: Task | Resource;
  times: number;
};

export function getTotalsTree(
  resource: Resource,
  tasks: Task[]
): Tree<TaskAmount> {
  const tree = new Tree<TaskAmount>();

  const generatingTask = tasks.find(val => val.name === resource.name);
  if (!generatingTask) {
    //No generating task, so we use the resource in place, since it is considered the "base" ingredient
    tree.createRoot({
      task: resource,
      times: resource.quantity
    });
    return tree;
  }

  const taskResource = generatingTask.resourcesGained.find(
    val => val.name === resource.name
  );
  const resourceGainedPerTask: number = taskResource?.quantity || 1;
  const timesToDoTask = resource.quantity / resourceGainedPerTask;

  const root = tree.createRoot({
    task: generatingTask,
    times: timesToDoTask
  });

  if (generatingTask.resourcesNeeded.length <= 0) {
    return tree;
  }

  for (const neededResources of generatingTask.resourcesNeeded) {
    const totalResourceNeeded = deepCopy(neededResources);
    totalResourceNeeded.quantity *= timesToDoTask;
    root.addChildNode(getTotalsTree(totalResourceNeeded, tasks).rootNode);
  }

  return tree;
}

//Assumptions: there is only one way to get a resource. Tasks are acyclic (there are no tasks that require a task that require the original task)
export function getBaseTotals(resource: Resource, tasks: Task[]): TaskAmount[] {
  const tree = getTotalsTree(resource, tasks);
  const arr: TaskAmount[] = [];
  tree.inOrderTraversal(node => {
    if (node.childNodes.length <= 0) {
      const arrayIndex = arr.findIndex(
        val => val.task.name === node.element.task.name
      );
      if (arrayIndex < 0) {
        //Does not exist in array, add to array
        arr.push(node.element);
      } else {
        //Already exists, combine totals
        arr[arrayIndex].times += node.element.times;
      }
    }
  });

  return arr;
}
