//Impelmenting the array data structure

class newArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //bear in mind that in js delete key word empty the element
  //it is not removing it's position or decrease the length of the array
  delete(index) {
    const item = this.data[index];
    this.shift(index); //this why deleting 
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  //implemting the count method which is not in js but in python
  count(item) {
    let counter = 0;

    for (let i = 0; i < this.length ; i++) {
      if (this.data[i] === item) {
        counter++;
      }
    }
    return counter;
  }
}
