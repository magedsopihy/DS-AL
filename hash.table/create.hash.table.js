class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.log(this.data);
  }

  //this is why when collision happen it takes O(n) to access the element
  get(key) {
    const address = this._hash(key);
    let currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  keys(){
     let keysArrays = [];
     for (let i = 0; i < this.data.length; i++) {
       if (this.data[i]){
         keysArrays.push(this.data[i][0][0])
       }
       
     }
     return keysArrays;
  }
}

const myhash = new HashTable(50);

// myhash.set("maged", "I will be a greet software engineer");
myhash.set("maged", 1);
myhash.set("ahmed", 2);
myhash.set("ail", 5);
//console.log(myhash.get('maged'));

console.log(myhash.keys());