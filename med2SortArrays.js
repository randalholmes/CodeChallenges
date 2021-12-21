// Median of two sorted arrays.  Leet 4 Hard

/**
    Given two sorted arrays nums1 and nums2 of size m and n respectively, 
    return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).


    Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

    
    Constraints:

        nums1.length == m
        nums2.length == n
        0 <= m <= 1000
        0 <= n <= 1000
        1 <= m + n <= 2000
        -106 <= nums1[i], nums2[i] <= 106


 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// O(log(m+n))
const findMedianSortedArrays = function(nums1, nums2) {
    
}


// O(m+n)
const findMSAsBruteForce = (nums1, nums2) => {
    const comboList = merge(nums1, nums2)
    return getMedian(comboList)
}


function merge(nums1, nums2) {
    const combo = []  // merged list

    // Create list iterators and grab first values
    const it1 = nums1.values()
    let val1 = it1.next()

    const it2 = nums2.values()
    let val2 = it2.next()

    while (!val1.done && !val2.done) {
        if (val1.value <= val2.value) {
            combo.push(val1.value)
            val1 = it1.next()
        } else {
            combo.push(val2.value)
            val2 = it2.next()
        }
    }

    if (val1.done) {
        while (!val2.done) {
            combo.push(val2.value)
            val2 = it2.next()
        }
    } else {
        while (!val1.done) {
            combo.push(val1.value)
            val1 = it1.next()
        }
    }

    return combo
}


function getMedian(list) {
    if (isEven(list.length)) {
        const center = (list.length/2) - 1
        return (list[center] + list[center+1]) / 2
    } else {
        const center = ((list.length - 1) / 2)
        return list[center]
    }
}


function isEven(num) {
    return num%2 ? false : true
}

// test merge()
// console.log(merge([1,2,3], [6,7,8]))
// console.log(merge([1,2,3,10,34,], [6,7,7,8]))
// console.log(merge([34,55,77], [6,7,34,44,54,77]))

// test getMedian()
// console.log(getMedian([1,2,3]))
// console.log(getMedian([1,2,3,4]))
// console.log(getMedian([1,2,3,4,5,6]))
// console.log(getMedian([1,2,3,8,9]))

// test findMSAsBruteForce()
console.log(findMSAsBruteForce([1,2,3], [6,7,8]))  // 4.5
console.log(findMSAsBruteForce([1,2,3,10,34,], [6,7,7,8]))  // 7
console.log(findMSAsBruteForce([34,55,77], [6,7,34,44,54,77])) // 44

