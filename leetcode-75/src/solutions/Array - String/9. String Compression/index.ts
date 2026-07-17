const compress = (chars: string[]): number => {
    let result: number = 0;
    let i: number = 0;
    while (i < chars.length) {
        const char: string = chars[i]!;
        let groupLength: number = 1;
        while (i + groupLength < chars.length && char === chars[i + groupLength]) groupLength++;
        chars[result] = char;
        result++;
        if (groupLength > 1) {
            for (const digit of String(groupLength)) {
                chars[result]! = digit;
                result++;
            }
        }
        i += groupLength;
    }
    return result;
}

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));