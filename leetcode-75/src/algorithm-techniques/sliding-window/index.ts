const slidingWindowExample = (nums: number[], k: number): number => {
    let currentSum = 0;
    for (let i = 0; i < k; i++) currentSum += nums[i]!;
    let maxSum: number = currentSum;
    for (let i: number = k; i < nums.length; i++) {
        currentSum += nums[i]! - nums[i - k]!;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(slidingWindowExample([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));