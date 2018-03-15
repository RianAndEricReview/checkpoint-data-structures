'use strict';
/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

//-----------------------------------------
// Stacks

function Stack () {
  this.theStack = []
}

Stack.prototype.add = function (item) {
  this.theStack.push(item)
  return this; // for chaining, do not edit
};

Stack.prototype.remove = function () {
  return this.theStack.pop()
};

//-----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

function Queue () {
  this.theQueue = []
}

Queue.prototype.add = function (item) {
  this.theQueue.push(item)
  return this; // for chaining, do not edit
};

Queue.prototype.remove = function () {
  return this.theQueue.shift()
};

//-----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

function LinkedList () {
  this.head = this.tail = null;
}

function ListNode (item, prev, next) {
  this.item = item;
  this.next = next || null;
  this.prev = prev || null;
}

LinkedList.prototype.addToTail = function (item) {
  let addedNode = new ListNode(item)
  if (!this.head) {
    this.head = addedNode
    this.tail = addedNode
  } else {
    this.tail.next = addedNode
    let oldTail = this.tail
    this.tail = addedNode
    this.tail.prev = oldTail
  }
  return this; // for chaining, do not edit
};

LinkedList.prototype.removeFromTail = function () {
  if (!this.tail) {
    return
  }
  let oldTail = this.tail
  if (this.tail === this.head) {
    this.tail = this.head = null
  } else {
    this.tail = oldTail.prev
    this.tail.next = null
  }
  return oldTail.item
};

LinkedList.prototype.forEach = function (iterator) {
  let executionNode = this.head
  while (executionNode) {
    iterator(executionNode.item)
    executionNode = executionNode.next
  }
};

//-----------------------------------------
// Association lists

function Alist () {
  this.aListArr = [null]
  this.nextTailIndex = 0
  this.head = this.aListArr[0]
}

function AlistNode (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

Alist.prototype.set = function (key, value, next) {
  let addedNode = new AlistNode(key, value, this.aListArr[0])
  if (!this.nextTailIndex) {
    this.aListArr.unshift(addedNode)
    this.nextTailIndex++
  } else {
    this.aListArr.unshift(addedNode)
  }
  this.head = this.aListArr[0]
  console.log('the list', this.aListArr)
  console.log('the head', this.head)
  return this; // for chaining; do not edit
};

Alist.prototype.get = function (key) {
  // your code here
};


//-----------------------------------------
// Hash tables

function hash (key) {
  var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

function HashTable () {
  this.buckets = Array(20);
  // your code here
}

HashTable.prototype.set = function (key, value) {
  // your code here. DO NOT simply set a prop. on an obj., that is cheating.
  return this; // for chaining, do not edit
};

HashTable.prototype.get = function (key) {
  // your code here. DO NOT simply get a prop. from an obj., that is cheating.
};

//-----------------------------------------
// Binary search trees

function BinarySearchTree (val) {
  // your code here
}

BinarySearchTree.prototype.insert = function (val) {
  // your code here
  return this; // for chaining, do not edit
};

BinarySearchTree.prototype.min = function () {
  // your code here
};

BinarySearchTree.prototype.max = function () {
  // your code here
};

BinarySearchTree.prototype.contains = function (val) {
  // your code here
};

BinarySearchTree.prototype.traverse = function (iterator) {
  // your code here
};
