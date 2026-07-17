const moveZeroes = (nums: number[]): number[] => {
    let slow: number = 0;
    for (let fast: number = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0)
        {
            // @ts-ignore
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));