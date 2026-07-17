const findMaxAvarage = (nums: number[], k: number) => {
    let currentSum = 0;
    for (let i: number = 0; i < k; i++) currentSum += nums[i]!;
    let maxSum = currentSum;
    for (let j: number = k; j < nums.length; j++) {
        currentSum += nums[j]! - nums[j - k]!;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum / k;
}

console.log(findMaxAvarage([1,12,-5,-6,50,3], 4));
console.log(findMaxAvarage([5], 1));