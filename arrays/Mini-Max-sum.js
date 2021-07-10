// Given five positive integers, find the minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. Then print the respective minimum 
// and maximum values as a single line of two space-separated long integers.

// input arr[1,2,3,4,5]
// output 10 14

function minMaxSum(arr) {
  const minNum = Math.max(...arr);
  const maxNum = Math.min(...arr);

  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(sum - maxNum + " " + (sum - minNum));
}

const arr = [5, 5, 5, 5, 5];

minMaxSum(arr);
