const reverseWords = (s: string): string => {
    return s.trim().split(' ').filter((s) => s !== '').reverse().join(' ');
}

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));