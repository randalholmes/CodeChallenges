//  Regular Expression Matching.  Leet Code 10, 

/*
    Given an input string s and a pattern p, implement 
    regular expression matching with support for '.' and '*' where:

        '.' Matches any single character.​​​​
        '*' Matches zero or more of the preceding element.

    The matching should cover the entire input string (not partial).

    Example 1:

    Input: s = "aa", p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".

    Example 2:

    Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'. 
        Therefore, by repeating 'a' once, it becomes "aa".

    Example 3:

    Input: s = "ab", p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)".

    
    Constraints:

        1 <= s.length <= 20
        1 <= p.length <= 30
        s contains only lowercase English letters.
        p contains only lowercase English letters, '.', and '*'.
        It is guaranteed for each appearance of the character '*', 
        there will be a previous valid character to match.

        
    My Solution: Create a DFA (Deterministic Finte Automota) where each
        node in the DFA is represented by a function. Since this is an
        all or nothing type match, the nodes/functions are store in a
        queue in the order in which they are needed.


 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = function(s, p) {
    //*** Character-Matching Function Factories ****

    // Character matching.
    // Do one to one matching of each character in 'chars' to the 
    // current character pointed to by strIndex in 's'.
    const charMatcher = chars => {
        return () => {
            for (let i=0; i<chars.length; ++i) {
                if (chars[i] !== s[strIndex]) throw new Error("no match")
                ++strIndex
                if (strIndex === strLen && i !== chars.length-1)  throw new Error("no match")
            }
        }
    }

    // Star '*' matching.
    // '*' means zero or more of the preceding element
    const starMatcher = char => {
        return () => {
            // Match 'char' as many times as possible
            while (strIndex < strLen) {
                if (char !== s[strIndex]) return  
                ++strIndex
            }
        }
    }

    // Dot '.' matching
    // '.' matches any single character.​​​​
    const dotMatcher = char => {
        return () => {
            ++strIndex
        }
    }


    //*** Tokenize 'p' and then translate into Queue of character-matching functions. ***
    const regExFuncs = []  // Our queue of functions.
    let i=start=0   // Need these values after 'for' loop is done.

    // Examine each character in 'p'.
    for (; i<p.length; ++i) {
        const char = p[i]
        if (char === "*") {
            // Check for series of characters before '*', except for the one just before.
            if (i - start > 1) {
                regExFuncs.push(charMatcher(p.slice(start, i-1)))
            }

            regExFuncs.push(starMatcher(p[i-1]))
            start = i + 1
        } else if ( char === ".") {
            // Check for series of characters before '.'.
            if (i - start >=1) {
                regExFuncs.push(charMatcher(p.slice(start, i)))
            }

            regExFuncs.push(dotMatcher())
            start = i + 1
        }
    }

    // check for remaining characters that may be in 'p'.
    if (i - start > 1) {
        regExFuncs.push(charMatcher(p.slice(start, i)))
    }   

    // Execute the DFA on string 's'.
    const strLen = s.length
    let strIndex = 0

    try {
        regExFuncs.forEach(fn => fn())  
    } catch (error) {
        return false
    }

    // Make sure entire string 's' was scanned.
    return (strLen === strIndex) ? true : false
}


// Note: Might need more testing of edge cases

console.log('s = "aa", p = "a*"', isMatch("aa", "a*"))  // true
console.log('s = "aaaaaaaa", p = "a*"', isMatch("aaaaaaaa", "a*"))  // true
console.log('s = "aaaab", p = "a*"', isMatch("aaaab", "a*"))  // false
console.log('s = "aaaab", p = "a*."', isMatch("aaaab", "a*."))  // true
console.log('s = "aabbc", p = "aabbc"', isMatch("aabbc", "aabbc"))  // true
console.log('s = "aabbc", p = "aabbcx"', isMatch("aabbc", "aabbcx"))  // false

console.log('s = "hxyc", p = "aabbc"', isMatch("hxyc", "aabbc"))  // false
console.log('s = "hxyc", p = "hxyc"', isMatch("hxyc", "hxyc"))  // true
console.log('s = "abc", p = "..."', isMatch("abc", "..."))  // true

console.log('s = "aabbc", p = "a.b*."', isMatch("aabbc", "a.b*."))  // true
console.log('s = "caabbc", p = "ca.b*."', isMatch("caabbc", "ca.b*."))  // true
console.log('s = "caabbc", p = "a.b*."', isMatch("caabbc", "a.b*."))  // false

