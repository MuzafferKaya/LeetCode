const maxOperations = (nums: number[], k: number): number => {
    const arr: number[] = nums.sort((a, b) => a - b);
    let left: number = 0, right: number = arr.length - 1
    let result: number = 0;
    while (left < right) {
        const sum: number = arr[left]! + arr[right]!;
        if (sum === k) {
            result++;
            left++;
            right--;
        }
        else if (sum < k) left++;
        else right--;
    }
    return result;
}

console.log(maxOperations([1,2,3,4], 5));
console.log(maxOperations([3,1,3,4,3], 6));