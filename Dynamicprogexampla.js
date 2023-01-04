function Fibsimple(n){
    if(n<2)return 1
    let res = fib(n-1)+fib(n-2)
    return res
} // Big O is O(2n)

function Fibwithdynamicprog_Recursive(n,memo = [undefined , 1,1]){
    if(memo[n]!==undefined) return memo[n]
    let res  = fib(n-1,memo) +fib(n-2,memo)
    memo[n] = res
    return res
} // Big O is O(n) but hard on space complexity because of recursive call the call stack exceeds after some point

function Fibwithdynamicprog_tabular(n){
    if(n<2)  return 1
    let fibArray = [0,1,1]
    for(i=3;i<=n;i++){
        fibArray[i] = fibArray[i-1]+fibArray[i-2]
    }
    let res = fibArray[n]
    return res
} // Big O is still O(n) but in space complexity it will not get out of memory as we are not using Call stack