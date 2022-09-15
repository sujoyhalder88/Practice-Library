/**
 * Problem 6 –
	Create a program to find the largest amongst given 3 numbers. 
 */

function largestNumber(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        console.log("n1 is Largest");
    } else if (n2 >= n3 && n2 >= n1) {
        console.log("n2 is Largest");
    } else {
        console.log("n3 is Largest");
    }
}
largestNumber(85, 90, 100);
