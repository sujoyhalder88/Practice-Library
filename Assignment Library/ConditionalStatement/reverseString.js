/**
 * Problem 5 –
Create a program to reverse a string.

 */

function reverseString(str) {
    let result = str.split("").reverse().join("");
    return result;
}
console.log(reverseString("relevel"));
