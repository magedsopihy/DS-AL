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

  delete(index) {
    const item = this.data[index];
    this.shift(index);
    this.length--;
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }

  //implemting the count method which in not js but in python
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

// const myArray = new newArray();
// myArray.push(5);
// myArray.push(5);
// myArray.push(6);
// myArray.push(6);
// myArray.pop();
// const yourArray = new newArray();
// yourArray.push(5);
// yourArray.push(5);

// console.log(yourArray.count(5));
