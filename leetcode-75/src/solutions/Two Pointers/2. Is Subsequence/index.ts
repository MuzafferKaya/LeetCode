const isSubsequence = (s: string, t: string): boolean => {
    let i: number = 0, j: number = 0;
    while (true) {
        if (i === s.length) return true;
        if (j === t.length) return false;
        if (s[i] === t[j]) i++;
        j++;
    }
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));