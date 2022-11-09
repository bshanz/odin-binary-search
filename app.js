// initiate node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// initiate binary search tree class
class Tree {
  constructor(arr) {
    this.root = null;
  }
  // function to sort an array into balanced binary search tree
  buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }

    let noDuplicates = [...new Set(arr)];
    let sortedArr = noDuplicates.sort(function (a, b) {
      return a - b;
    });

    let middle = parseInt((start + end) / 2);
    let node = new Node(sortedArr[middle]);

    node.left = buildTree(sortedArr, start, middle - 1);
    node.right = buildTree(sortedArr, middle + 1, end);
    return node;
  }
}

// function buildTree(arr, start, end) {
//   if (start > end) {
//     return null;
//   }

//   let noDuplicates = [...new Set(arr)];
//   let sortedArr = noDuplicates.sort(function (a, b) {
//     return a - b;
//   });
//   let middle = parseInt((start + end) / 2);
//   let node = new Node(sortedArr[middle]);

//   node.left = buildTree(sortedArr, start, middle - 1);
//   node.right = buildTree(sortedArr, middle + 1, end);
//   return node;
// }

//function to print binary tree in console
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// binary tree array to be sorted
const arr = [122, 2342, 334, 4, 55, 65, 7];
// will use n to set the end argument for the function
const n = arr.length;

//create new tree with arr from above
const binaryTree = new Tree(arr);

// set root as the sorted tree
const root = binaryTree.buildTree(arr, 0, n - 1);

// log the tree to console
console.log(binaryTree.buildTree(arr, 0, n - 1));

//log the printed tree to console
console.log(prettyPrint(root));
