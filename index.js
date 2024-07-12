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
//Second solution
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}


//Third solution
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}
*/
/* 
  Write the Big O time complexity of your function here
  The first solution has a time complexity of O(n**2)
  The second solution has a time and space complexity of O(n) 
  The third solution has a time and space complexity of O(n)

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
