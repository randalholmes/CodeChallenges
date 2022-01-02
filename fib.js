// Fibonacci     0,1,1,2,3,5,8,13,21

// A variety of methods for creating Fibonacci sequences.


// Functional    0,1,1,2,3,5,8,13,21

const fibFunc = num => {
    if (num === 1) return 0
    if (num < 4) return 1

    const [, nthFib] = Array(num-3).fill(0).reduce( (acc, val) => {
        const [prev, cur] = acc
        return [cur, prev + cur]
    }, [1,1])
    
    return nthFib
}


// Iteration      0,1,1,2,3,5,8,13,21

const fibIter = num => {
    if (num === 1) return 0
    if (num < 4) return 1

    let cur = 1
    let prev = 1
    for (let i=4, tmp; i<=num; ++i) {
        tmp = cur
        cur = cur + prev
        prev = tmp
    }
    
    return cur
}


// Iteration version 2.    0,1,1,2,3,5,8,13,21

const fibIter2 = num => {
    if (num === 1) return 0
    if (num < 4) return 1

    let  vals = [1,1]
    for (let i=4, tmp; i<=num; ++i) {
        const [prev, cur] = vals
        vals = [cur, cur + prev]
    }
    
    return vals[1]
}


// Recursive    0,1,1,2,3,5,8,13,21

const fibRecursive = (n) => {
    if (n === 1) return 0
    if (n < 4) return 1

    return fibRecursive(n-2) + fibRecursive(n-1) 
}


// Recursive  with memoization.    0,1,1,2,3,5,8,13,21
const fibReMemo = (n) => {

    const fib = n => {
        if (n === 1) return 0
        if (n < 4) return 1

        if (memo[n] !== -1) return memo[n]

        memo[n] = fib(n-2) + fib(n-1)
        return memo[n]
    }

    const memo = Array(n+1).fill(-1)
    return fib(n)
}


const testFibonacci = funcs => {
    funcs.forEach(fn => {
        const seq = []
        for (i=1; i<=10; ++i) {
            seq.push(fn(i))
        }

        console.log(`Test for ${fn.name}. Sequence = `, seq)
    });
}


const funcsToTest = [fibFunc, fibIter, fibIter2, fibRecursive, fibReMemo]
testFibonacci(funcsToTest)

