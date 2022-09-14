/**
 * Problem 1:

Given `n` pieces of sweet, help Peter and John divide it among themselves such that both get an
equal number of sweets. Note that the sweet can not be broken into sub-pieces. You have to tell if it
is possible to make such distribution or not based upon n number of pieces. I.e., possible outputs:
`yes` or `no.`


Example-1

Input: 8

Output: Yes


Example-2

Input: 7

Output: No
 */

function DivideSweet(n) {
    if (n <= 2) return false;
    if (n % 2 == 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
DivideSweet(8);
DivideSweet(7);
