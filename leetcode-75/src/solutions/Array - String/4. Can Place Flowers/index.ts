const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
    let count: number = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;
        const emptyLeft = (i === 0 || flowerbed[i - 1] === 0);
        const emptyRight = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
        if (emptyLeft && emptyRight) {
            count++;
            flowerbed[i] = 1;
        }
    }
    return count >= n;
}

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));