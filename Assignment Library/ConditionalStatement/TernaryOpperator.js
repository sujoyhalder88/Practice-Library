/**
 * Problem 2 –
 Create a program to print the result as pass if the marks obtained is greater
 than or equal to 40 using ternary operator.
 */

function result(num) {
    let marks = 40;

    num >= marks ? console.log("pass") : console.log("Fail");
}
result(39);
