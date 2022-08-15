// write a function among the largest number
/*
function largestNumber(a, b, c) {
    let maxmimNum;
    if (a > b && a > c) {
        maxmimNum = a;
    } else if (b > c && b > a) {
        maxmimNum = b;
    } else {
        maxmimNum = c;
    }
    return maxmimNum;
}
console.log(largestNumber(9, 5, 3));
*/

function largestNumber(a, b) {
    a > b
        ? console.log(`${a} GraterThan out of ${a} and ${b}`)
        : console.log(`${b} GraterThan out of ${a} and ${b}`);
}
largestNumber(4, 5);
