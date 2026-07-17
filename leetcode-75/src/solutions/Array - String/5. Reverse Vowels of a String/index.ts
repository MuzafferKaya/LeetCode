const reverseVowels = (s: string): string => {
    const vowels: Set<string> = new Set(["a","e","i","o","u","A","E","I","O","U"]);
    const arr: string[] = [...s];
    let leftPointer: number = 0;
    let rightPointer: number = arr.length - 1;
    while (leftPointer < rightPointer) {
        if (!vowels.has(arr[leftPointer]!)) {
            leftPointer++;
            continue;
        }
        if (!vowels.has(arr[rightPointer]!)) {
            rightPointer--;
            continue;
        }
        // @ts-ignore
        [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
        leftPointer++;
        rightPointer--;
    }
    return arr.join('');
}

console.log(reverseVowels('IceCreAm'));
console.log(reverseVowels('leetcode'));