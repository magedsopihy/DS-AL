/*problem : write a function to determine if the same value is exist
in the two arrays or not 

1- 2 parameters , return true or false
2-  input & output example example 
array1 = ['a','b','c','x']
array2 = ['z','y','x']
retun true

array1 = ['a','b','c']
array2 = ['z','y','x']
retun false

*/
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

//naive solution
// two loops  tc = n^2 bad
// function compareArrays(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

//improve time big o to n(a + b)

function compareArrays(arr1, arr2) {
  let mySet1 = new Set(arr1);

  for (const iterator of arr2) {
    if (mySet1.has(iterator)) {
      return true;
    }
  }

  return false;
}
console.log(compareArrays(array1, array2));
