class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev:null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev:null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  assert(index, value) {
    //add some checks here
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 1) {
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev:null
    };

    let prevNode = this.traverseToIndex(index - 1);
    let nextNode = prevNode.next;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //remove the head
    if (index < 1) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    if (index >= this.length) {
      return undefined;
    }
    const prevNode = this.traverseToIndex(index - 1);
    const unwanttedNode = prevNode.next;
    const nextNode = unwanttedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }

  reverse(){
   let first = this.head;
   let second = first.next;
   this.tail = this.head;

   while(second){
     const temp = second.next;
     second.next = first;
     first = second;
     second = temp;
   }

   this.head.next = null;
   this.head = first;

  }
  printList() {
    let currentNode = this.head;
    const listValues = [];
    for (let i = 0; i < this.length; i++) {
      listValues.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listValues);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.reverse();
// myLinkedList.assert(2,8);
// console.log(myLinkedList);
// myLinkedList.append(7);
// myLinkedList.append(8);
// myLinkedList.remove(1);
// //
// // console.log(myLinkedList);
myLinkedList.printList();
// console.log(myLinkedList);
