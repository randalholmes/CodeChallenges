// twosum.js   leet 1

/**
Given an array of integers nums and an integer target, return indices of the
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may
not use the same element twice.

You can return the answer in any order.

* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// Single while loop version
const twoSumV1 = function(nums, target) {
  let startIndex = 0;
  let index1 = 0;
  let index2 = 1;

  // Iterate over nums trying all combinations until find target sum.
  while (index1 < nums.length -1){
    //console.log(`Index1=${index1}, Index2=${index2}`) // testing output

    if (nums[index1] + nums[index2] == target) {
      return [index1, index2];
    }

    // increment second index over array before incrementing first index and
    // reseting second index to one more than the first.
    ++index2;
    if (index2 == nums.length) {
      ++startIndex;
      index1 = startIndex;
      index2 = index1 + 1;
    }
  }

  return []; // indicates target sum not found.
};

console.log("twoSumV1");
console.log(twoSumV1([2,7,11,15], 9));  // [0,1]
console.log(twoSumV1([2,7,11,15], 26)); // [2,3]
console.log(twoSumV1([2,7,11,15], 13)); // [0,2]
console.log(twoSumV1([2,7,11,15], 5)); // [] Fail test


// Double 'for' loop version
const twoSumV2 = function(nums, target) {
  // classic double loop solution
  for (let i=0; i<nums.length; ++i) {
    for (let j=i+1; j<nums.length; ++j) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }

  return []; // indicates target sum not found.
}

console.log("twoSumV2");
console.log(twoSumV2([2,7,11,15], 9));  // [0,1]
console.log(twoSumV2([2,7,11,15], 26)); // [2,3]
console.log(twoSumV2([2,7,11,15], 13)); // [0,2]
console.log(twoSumV2([2,7,11,15], 5)); // [] Fail test


// Single 'for' loop with assistance from a key:value map version.
const twoSumV3 = function(nums, target) {

  let deltas={};// store values from nums[i] and their index "i" as key:value pairs.

  // For each value found in nums calculate target-value as delta. Check if
  // delta is in deltas. If so then we are done. Otherwise add value and it's
  // index to deltas.
  for (let i=0; i<nums.length; ++i) {
    let delta = target - nums[i]
    if (deltas[delta] === undefined) {
      deltas[nums[i]]=i;
    } else {
      return [deltas[delta], i];
    }
  }

  console.log(deltas);
  return []; // indicates target sum not found.
}

console.log("twoSumV3");
console.log(twoSumV3([2,7,11,15], 9));  // [0,1]
console.log(twoSumV3([2,7,11,15], 26)); // [2,3]
console.log(twoSumV3([2,7,11,15], 13)); // [0,2]
console.log(twoSumV3([2,7,11,15], 5)); // [] Fail test
