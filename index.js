function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j= i + 1; j < array.length; j++){
      if((array[i]+array[j]) === target){
        return true;
      }      
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Getting two inputs: an array and an integer value. 
  The function returns true if the same of any elements within the array matches the integer value.
  Make use of nested loop to find matching value.
*/

/*
  Add written explanation of your solution here
  Check the first two values with values assigned to two separate variables.
  If true, end loop. Otherwise, move to the next element by increasing the value of the index by 1 after each iteration.
  Check array length to break loop.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
