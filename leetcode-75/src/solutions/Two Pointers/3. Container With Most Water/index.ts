const maxArea = (height: number[]): number => {
    let max: number = 0;
    let leftPointer: number = 0, rightPointer: number = height.length - 1;
    while (leftPointer < rightPointer) {
        max = Math.max(max, (rightPointer - leftPointer) * Math.min(height[leftPointer]!, height[rightPointer]!));
        if (height[leftPointer]! < height[rightPointer]!) leftPointer++;
        else rightPointer--;
    }
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));