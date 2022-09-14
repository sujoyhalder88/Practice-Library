/**
 * Problem 2: 

Given the length of three line segments as a, b, and c., Find if they can form a triangle or not?
(Students are not expected to take any user input, solve the problem using hardcoded value)


Example-1

Input: a=7,b=10,c=5

Output: Triangle
 */

function checkTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    } else {
        return true;
    }
}
let a = 7,
    b = 10,
    c = 5;
if (checkTriangle(a, b, c)) {
    console.log("Triangle");
} else {
    console.log("Not Triangle");
}
checkTriangle();
