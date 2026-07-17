const mergeAlternately = (word1: string, word2: string): string => {
    let result: string = "";
    const maxLenght: number = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLenght; i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result;
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));