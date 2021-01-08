import { Resource, SkillCalculatorTask } from "@/logic/solver/types";
import { SkillCalculatorResult } from "@/logic/skill_calculator/types";
import {
  getTaskTree,
  isResource,
  TaskTreeInfo
} from "@/logic/skill_calculator/tasktree";
import { Tree } from "@/logic/util/Tree";

function getResourceFromParentTask(
  childTask: SkillCalculatorTask,
  parentTask: SkillCalculatorTask
): Resource | undefined {
  return parentTask.resourcesNeeded.find(t => t.name === childTask.name);
}

function getResourceGeneratedByTask(
  task: SkillCalculatorTask
): Resource | undefined {
  return task.resourcesGained.find(t => t.name === task.name);
}

function fillInIterationData(
  tree: Tree<SkillCalculatorTask | Resource>
): Tree<(SkillCalculatorTask | Resource) & TaskTreeInfo> {
  const castTree = tree as Tree<
    (SkillCalculatorTask | Resource) & TaskTreeInfo
  >;
  castTree.inOrderTraversal(n => {
    n.element.treeInfo = {
      iterations: 0
    };
  });

  castTree.rootNode!.element.treeInfo.iterations = 1;
  castTree.inOrderTraversal(node => {
    if (!node.parentNode) return;
    if (isResource(node.element)) {
      node.element.treeInfo.iterations =
        node.parentNode.element.treeInfo.iterations * node.element.quantity;
    } else {
      const gainedResource = getResourceGeneratedByTask(node.element);
      const neededResource = getResourceFromParentTask(
        node.element,
        node.parentNode.element as SkillCalculatorTask
      );
      const iterationsMult =
        neededResource!.quantity / gainedResource!.quantity;
      node.element.treeInfo.iterations =
        iterationsMult * node.parentNode.element.treeInfo.iterations;
    }
  });

  return castTree;
}

export function calculateSkillCalculatorResult(
  taskList: SkillCalculatorTask[],
  chosenTaskName: string,
  startXp: number,
  endXp: number,
  accountSubTasks: boolean,
  dxp: boolean
): SkillCalculatorResult {
  const task = taskList.find(t => t.name === chosenTaskName);
  if (!task) {
    throw new Error(`Failed to find task matching name: ${chosenTaskName}`);
  }
  let diff = endXp - startXp;
  if (dxp) {
    diff /= 2;
  }

  //No accounting for subtasks.
  if (!accountSubTasks) {
    const iterations = Math.ceil(diff / task.experience);

    const resourcesGained: Resource[] = [];
    for (const res of task.resourcesGained) {
      resourcesGained.push({
        name: res.name,
        quantity: res.quantity * iterations
      });
    }

    const resourcesUsed: Resource[] = [];
    for (const res of task.resourcesNeeded) {
      resourcesUsed.push({
        name: res.name,
        quantity: res.quantity * iterations
      });
    }

    return {
      task,
      startXp,
      endXp,
      accountForSubtasks: accountSubTasks,
      iterations,
      resourcesGained,
      resourcesUsed,
      dxp
    };
  }

  //We need to account for subtasks; that means using the task tree
  const taskTree = getTaskTree(task, taskList);
  let totalXpGain = 0;
  taskTree.inOrderTraversal(node => {
    if (!isResource(node.element)) {
      totalXpGain += node.element.experience;
    }
  });

  const iterations = Math.ceil(diff / totalXpGain);
  const itTaskTree = fillInIterationData(taskTree);

  const baseResourcesNeeded = new Map<string, number>();

  itTaskTree.inOrderTraversal(node => {
    if (node.leaf()) {
      if (baseResourcesNeeded.has(node.element.name)) {
        baseResourcesNeeded.set(
          node.element.name,
          baseResourcesNeeded.get(node.element.name)! +
            node.element.treeInfo.iterations * iterations
        );
      } else {
        baseResourcesNeeded.set(
          node.element.name,
          node.element.treeInfo.iterations * iterations
        );
      }
    }
  });

  const resourcesNeeded: Resource[] = [];
  for (const name of baseResourcesNeeded.keys()) {
    const quantity = baseResourcesNeeded.get(name)!;
    resourcesNeeded.push({
      name,
      quantity
    });
  }

  const resourcesGained: Resource[] = [];
  for (const res of task.resourcesGained) {
    resourcesGained.push({
      name: res.name,
      quantity: res.quantity * iterations
    });
  }

  return {
    task,
    startXp,
    endXp,
    accountForSubtasks: accountSubTasks,
    iterations,
    resourcesGained,
    resourcesUsed: resourcesNeeded,
    dxp
  };
}

/*
function getAmountProducedPerIteration(
  task: SkillCalculatorTask
): number | undefined {
  const res = task.resourcesGained.find(s => s.name === task.name);
  if (!res) {
    return undefined;
  }
  return res.quantity;
}
*/
