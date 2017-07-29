/*
challenge: https://www.hackerrank.com/challenges/even-tree/problem
*/

const fs = require('fs');
let removedNodes = 0;

main();
function main(){

 
fs.readFile('input.txt', 'utf8', function(err, contents) {
    processData(contents);
});
}
function processData(input) {
  //Enter your code here
  let tokens = input.split("\n");
  let firstRow = tokens[0].split(" ");
  let n = +firstRow[0];
  let m = +firstRow[1];

  let tree = [];
  for (let i = 1; i <= m; i++) {
    let row = tokens[i].split(" ");
    let n1 = +row[0];
    let n2 = +row[1];

    if (tree[n1] === undefined) {
      tree[n1] = [];
    }
    if (tree[n2] === undefined) {
      tree[n2] = [];
    }
    tree[n1].push(n2);
    tree[n2].push(n1);
  }

  subNodes(1, tree, 0);
  console.log(removedNodes);
}

function subNodes(root, tree, parent) {
  let chidtreeList = tree[root];
  let length = chidtreeList.length;
  let node = 1;
  for (let index in chidtreeList) {
      let childRoot = chidtreeList[index];
    if (childRoot === parent) continue;

    let n = subNodes(childRoot, tree, root);
    if (n % 2 === 0) {
      removedNodes++;
    } else {
      node += n;
    }
  }
  return node;
}
