// threeSum.js  leet 15

/**
  Given an array nums of n integers, are there elements a, b, c in nums
  such that a + b + c = 0? Find all unique triplets in the array which
  gives the sum of zero.

  Notice that the solution set must not contain duplicate triplets.

  Example 1:

  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]

  Example 2:

  Input: nums = []
  Output: []

  Example 3:

  Input: nums = [0]
  Output: []

 * @param {number[]} nums
 * @return {number[][]} array of triplits.
 */
function threeSum(nums) {
  // Convert nums in to two lists. One positive numbers and one negaitve.
  let negs=[];
  let pos=[];
  for (num of nums) {
    if (num < 0) {
      negs.push(num);
    } else {
      pos.push(num);
    }
  }

  // Iterate over the negative and postive number lists pulling one number
  // from each list and then look for a third number that will cause the sum
  // of the three numbers to equal zero. Store correct triplets in 'output'.
  let output = [];
  for (let i=0; i<negs.length; ++i) {
      let num1 = negs[i];
    for (let j=0; j<pos.length; ++j) {
      let num2 = pos[j];
      if (num1 + num2 < 0) { // need a positive number.
        for (let k=j+1; k<pos.length; ++k) {
          if (num1 + num2 + pos[k] == 0) {
            output.push([num1, num2, pos[k]]);
          }
        }
      } else { // need a negative number
        for (let k=i+1; k<negs.length; ++k) {
          if (num1 + num2 + negs[k] == 0) {
            output.push([num1, num2, negs[k]]);
          }
        }
      }
    }
  } // end outer for

  // remove duplicate entries
  let finalOutput = [];
  if (output.length > 0) {
    finalOutput.push(output.pop());
    while (output.length > 0) {
      let tmp = output.pop();
      if (!finalOutput.some(triplet => triplet.sort().join("") ==
                                       tmp.sort().join(""))) {
        finalOutput.push(tmp);
      }
    }
  }
  return finalOutput;
}

//***       Test Code       ***//
console.log(threeSum([-1,0,1,2,-1,-4])); //  [[-1,-1,2],[-1,0,1]]
