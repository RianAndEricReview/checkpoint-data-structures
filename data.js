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
  this.head = this.aListArr[0]
}

function AlistNode (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

Alist.prototype.set = function (key, value, next) {
  let addedNode = new AlistNode(key, value, this.aListArr[0])
  this.aListArr.unshift(addedNode)
  this.head = this.aListArr[0]
  return this; // for chaining; do not edit
};

Alist.prototype.get = function (key) {
  let searchValue = this.aListArr.slice(0, -1).find((item) => item.key === key)
  return searchValue ? searchValue.value : undefined
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
  for(let i = 0; i<this.buckets.length; i++){
    this.buckets[i] = new Alist()
  }
}

HashTable.prototype.set = function (key, value) {
  // your code here. DO NOT simply set a prop. on an obj., that is cheating.
  let hashedKey = hash(key)
  this.buckets[hashedKey].set(key, value)
  return this; // for chaining, do not edit
};

HashTable.prototype.get = function (key) {
  // your code here. DO NOT simply get a prop. from an obj., that is cheating.
  let hashedKey = hash(key)
  return this.buckets[hashedKey].get(key)
};

//-----------------------------------------
// Binary search trees

function BinarySearchTree (val) {
  // your code here
  this.value = val
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function (val) {
  // your code here
  if(val < this.value){
    if(this.left){
      this.left.insert(val)
    } else {
      this.left = new BinarySearchTree(val)
    }
  } else {
    if(this.right){
      this.right.insert(val)
    } else {
      this.right = new BinarySearchTree(val)
    }
  }
  return this; // for chaining, do not edit
};

BinarySearchTree.prototype.min = function () {
  // your code here
  if(!this.left){
    return this.value
  } else {
    return this.left.min()
  }
};

BinarySearchTree.prototype.max = function () {
  // your code here
  if(!this.right){
    return this.value
  } else {
    return this.right.max()
  }
};

BinarySearchTree.prototype.contains = function (val) {
  // your code here
  if(val === this.value){
    return true
  } else if (val < this.value){
    if(this.left){
      return this.left.contains(val)
    } else {
      return false
    }
  } else {
    if(this.right){
      return this.right.contains(val)
    } else {
      return false
    }
  }
};

BinarySearchTree.prototype.traverse = function (iterator) {
  // your code here
  if(this.left){
    this.left.traverse(iterator)
  }
  iterator(this.value)
  if(this.right){
    this.right.traverse(iterator)
  }
};
