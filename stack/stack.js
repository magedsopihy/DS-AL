//Implement Stack With linked list  

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {
//       return this.top;
//   }

//   push(value) {
//       const node = new Node(value);

//       if(!this.top){
//           this.top = node;
//           this.bottom = node;
//       }else{
//           const holdingTop = this.top;
//           this.top = node;
//           this.top.next = holdingTop;
          
//       }
      
//      this.length++;

//   }

//   pop() {
//       if(!this.top){
//           return null;
//       }

//       if(this.top === this.bottom){
//           this.bottom = null;
//       }
//       const topValue = this.top.value;
//       this.top = this.top.next;
//       this.length--;
//       return topValue;
//   }
// }

//Implement with array


class Stack{
    constructor(){
      this.array = [];
    }

    peek(){
        return this.array[this.array.length -1];
    }

    push(value){
     this.array.push(value);
    }

    pop(){
        this.array.pop();
    }
}


const stack = new Stack();
stack.push(5);
stack.push(7);
stack.pop();
console.log(stack);