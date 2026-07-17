const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
    let result: boolean[] = [];
    const maxCandies = Math.max(...candies);
    for (let i: number = 0; i < candies.length; i++)
        result.push(candies[i]! + extraCandies >= maxCandies);
    return result;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([12,1,12], 10));