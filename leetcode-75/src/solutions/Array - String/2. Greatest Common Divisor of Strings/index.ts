const gcd = (a: number, b: number) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

const gcdOfString = (str1: string, str2: string): string => {
    if (str1.concat(str2) !== str2.concat(str1)) return "";
    const gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength);
}

console.log(gcdOfString("ABCABC", "ABC"));
console.log(gcdOfString("ABABAB", "ABAB"));
console.log(gcdOfString("LEET", "CODE"));
console.log(gcdOfString("AAAAAB", "AAA"));