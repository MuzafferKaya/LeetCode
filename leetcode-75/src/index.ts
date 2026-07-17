const longestOnes = (nums: number[], k: number): number => {
    let maxOnes: number = 0;
    let i: number = 0;
    let currentOnes: number = 0;
    let step: number = 0;
    while (currentOnes < k && i < nums.length) {
        console.log(i);
        console.log(step)
        if (nums[step] === 0) currentOnes++;
        step++
        if (currentOnes === k) {
            console.log(true)
            currentOnes = 0;
            maxOnes = Math.max(maxOnes, step);
            i++;
        }
    }
    return maxOnes;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
//console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));