function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i<array.length; i++) {      // iterates through the array calculating the complement 
    const complement = target - array[i];    // for every element in the array calculate the complement
    for (let j = i + 1; j < array.length; j++) {  // the next iteration loopss through the array finding if our complement exists
      if(array[j] === complement) {
        return true;                       //if the complement exists return true otherwise  return false
      }
    }
  }
  return false;
    }

/* 
  Write the Big O time complexity of your function here
  loop 1 = n steps  
  loop 2 (nested ) = n*n steps
  Time complexity = O(n^2)
  Space complexity = O(n)
 */

/* 
  Add your pseudocode here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  iterate through each number in the array 
  for the correct number identify a number that adds to the target
  the correct number is target - number  
*/

/*
  Add written explanation of your solution here
  Had to check whether any 2 numbers in the array add up to the target. 
If an array includes [4,5,6,7] and the target is 11, it should return true. Otherwise it should return false
Created a function hasTargetSum that take in an array and a target
Wrote the first iteration of the array using it

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

