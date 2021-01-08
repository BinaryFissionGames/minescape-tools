export class TreeNode<T> {
  element: T;
  parentNode: TreeNode<T> | null = null;
  childNodes: TreeNode<T>[] = [];

  constructor(data: T) {
    this.element = data;
  }

  addChildData(data: T) {
    const node = new TreeNode(data);
    this.addChildNode(node);
  }

  addChildNode(node: TreeNode<T> | null) {
    if (node === null) {
      return;
    }
    node.parentNode = this;
    this.childNodes.push(node);
  }

  depth(): number {
    if (this.parentNode == null) {
      return 0;
    }
    return 1 + this.parentNode.depth();
  }

  leaf(): boolean {
    return this.childNodes.length <= 0;
  }
}

type VisitFunction<T> = (node: TreeNode<T>) => void;

export class Tree<T> {
  rootNode: TreeNode<T> | null = null;

  createRoot(data: T) {
    const node = new TreeNode(data);
    this.rootNode = node;
    return node;
  }

  inOrderTraversal(visitFn: VisitFunction<T>) {
    this.inOrderTraversalInternal(this.rootNode, visitFn);
  }

  private inOrderTraversalInternal(
    node: TreeNode<T> | null,
    visitFn: VisitFunction<T>
  ) {
    if (node === null) {
      return;
    }

    visitFn(node);

    for (const childNode of node.childNodes) {
      this.inOrderTraversalInternal(childNode, visitFn);
    }
  }
}
