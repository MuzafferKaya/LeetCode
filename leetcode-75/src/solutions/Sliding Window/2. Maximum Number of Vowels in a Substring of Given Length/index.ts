const maxVowels = (s: string, k: number): number => {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentVowels: number = 0;
    for (let i: number = 0; i < k; i++) currentVowels += vowels.has(s[i]!) ? 1 : 0;
    let maxVowels: number = currentVowels;
    for (let i: number = k; i < s.length; i++) {
        if (vowels.has(s[i]!)) currentVowels++;
        if (vowels.has(s[i - k]!)) currentVowels--;
        maxVowels = Math.max(maxVowels, currentVowels);
    }
    return maxVowels;
}

console.log(maxVowels('abciiidef', 3));
console.log(maxVowels('aeiou', 2));
console.log(maxVowels('leetcode', 3));