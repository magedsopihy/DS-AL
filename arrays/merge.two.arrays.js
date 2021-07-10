function mergeArrays(arr1, arr2) {
  // const start = performance.now();
  // const merge = [...arr1, ...arr2].sort();
  // const end = performance.now();
  // let time = end - start; //time = 0.02702699974179268
  // console.log(time);
  // return merge;


  //do some checks 
  if(arr1.length ===0){
    return arr2;
  }

  if(arr2.length ===0){
    return arr1;
  }

  const start = performance.now();
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let mergedArray = [];
  let i = 1;
  let j = 1;

  

  while (arr1Item || arr2Item) {
    if (arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    }
    else{
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  const end = performance.now();
  let time = end - start;  //time = 0.01710899919271469
  console.log(time);
  return mergedArray;
}

const array1 = [1, 2, 3, 5];
const array2 = [5, 6, 7];

console.log(mergeArrays(array1, array2));
