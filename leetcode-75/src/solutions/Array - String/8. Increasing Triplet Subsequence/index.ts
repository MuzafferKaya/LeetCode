const increasingTriplet = (nums: number[]): boolean => {
    let first: number = Infinity;
    let second: number = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]! <= first){
            first = nums[i]!;
            continue;
        }
        if (nums[i]! <= second){
            second = nums[i]!;
            continue;
        }
        return true;
    }
    return false;
}

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1]));
console.log(increasingTriplet([2,1,5,0,4,6]));