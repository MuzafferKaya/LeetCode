const productExceptSelf = (nums: number[]): number[] => {
    const n: number = nums.length;
    let result: number[] =  new Array(n).fill(1);
    let prefix: number = 1;
    let postfix: number = 1;
    for (let i = 0; i < n; i++) {
        result[i]! *= prefix;
        prefix *= nums[i]!;
        result[n - 1 - i]! *= postfix;
        postfix *= nums[n - 1 - i]!;
    }
    return result;
}

console.log(productExceptSelf([1,2,3,4]));