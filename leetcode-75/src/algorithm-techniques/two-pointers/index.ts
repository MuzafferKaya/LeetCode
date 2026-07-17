const twoPointersExample = (nums: number[], target: number): boolean => {
    const arr: number[] = nums.sort((a, b) => a - b);
    let leftPointer: number = 0;
    let rightPointer: number = arr.length - 1;
    while (leftPointer < rightPointer) {
        const sum: number = arr[leftPointer]! + arr[rightPointer]!;
        if (sum > target) {
            rightPointer--;
            continue;
        }
        if (sum < target) {
            leftPointer++;
            continue;
        }
        return true;
    }
    return false;
}

console.log(twoPointersExample([10, 20, 35, 45, 50], 65));