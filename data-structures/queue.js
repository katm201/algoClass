/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */
function Stack() {
  this.storage = {};
  this.size = 0;
}

Stack.prototype.push = function(value) {
  this.size++;
  this.storage[this.size] = value;
};
// Time complexity: O(1)

Stack.prototype.pop = function() {
  const value = this.storage[this.size];
  
  if (this.size > 0) {
    delete this.storage[this.size];
    this.size--;
  }

  return value;
};
// Time complexity: O(1)

Stack.prototype.peek = function() {
  return this.storage[this.size];
};
// Time complexity: O(1)

Stack.prototype.count = function() {
  return this.size;
};
// Time complexity: O(1)

Stack.prototype.contains = function(value) {
  for (let position in this.storage) {
    if (this.storage[position] === value) {
      return true;
    }
  }

  return false;
};
// Time complexity: O(n)

function Queue(capacity) {
  this._leftStack = new Stack();
  this._rightStack = new Stack();
  this._capacity = capacity;
}

// adds to the back
Queue.prototype.enqueueRight = function(value) {
  if (this.count() < this._capacity) {
    this._transferLeft();
    this._leftStack.push(value);
  } else {
    return 'Max capacity already reached. Remove element before adding a new one.';
  }
};
// Time complexity: O(n)

// removes from the front
Queue.prototype.dequeueLeft = function() {
  this._transferRight();
  return this._rightStack.pop();
};
// Time complexity: O(n)

// adds to the front
Queue.prototype.enqueueLeft = function(value) {
  if (this.count() < this._capacity) {
    this._transferRight();
    this._rightStack.push(value);
  } else {
    return 'Max capacity already reached. Remove element before adding a new one.';
  }
};
// Time complexity: O(n)

// removes from the back
Queue.prototype.dequeueLeft = function() {
  this._transferLeft();
  return this._leftStack.pop();
};
// Time complexity: O(n)

Queue.prototype._transferRight = function() {
  while (this._leftStack.count() > 0) {
    const value = this._leftStack.pop();
    this._rightStack.push(value);
  }
};
// Time complexity: O(n)

Queue.prototype._transferLeft = function() {
  while (this._rightStack.count() > 0) {
    const value = this._rightStack.pop();
    this._leftStack.push(value);
  }
};
// Time complexity: O(n)

Queue.prototype.peek = function() {
  this._transferRight();
  return this._rightStack.peek();
};
// Time complexity: O(n)

Queue.prototype.count = function() {
  return this._leftStack.count() + this._rightStack.count();
};
// Time complexity: O(1)

Queue.prototype.contains = function(value) {
  return this._rightStack.contains(value) || this._leftStack.contains(value);
};
// Time complexity: O(n)

Queue.prototype.until = function(value) {
  let pops = 0;
  let found = false;

  while (this.count() > 0) {
    const item = this.dequeueLeft();
    pops++;
    if (value === item) {
      return pops;
    }
  }

  return pops;
};
// Time complexity: O(n)

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
