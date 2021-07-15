const arr = [2,1,1,2,3,5,1,2];

console.log(recurringChar(arr));

function recurringChar(arr){
  if(!arr.length || arr.length < 2){
    return;
  }

  const chars = new Map();
  for (let i = 0; i < arr.length; i++) {
    console.log(chars.keys())
    
       if(chars.has(arr[i])){
         return arr[i];
       }
       chars.set(arr[i], arr[i]);
  }
  return 'no curring charachters';
}