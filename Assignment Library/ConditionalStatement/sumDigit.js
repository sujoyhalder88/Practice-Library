/**
 * Problem 7 –
	Create a program to get sum of all digits of a number
 */

function sumDigit(num) {
    let sum = 0;
    while (num !== 0) {
        sum = sum + (num % 10);
        num = parseInt(num / 10);
    }
    return sum;
}
console.log(sumDigit(123));
