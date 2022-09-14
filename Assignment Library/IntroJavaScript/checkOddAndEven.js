//2) Program to check if a number is odd or even

function checkOddAndEvenNum(n) {
    if (n < 0) console.log(false);
    if (n % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
checkOddAndEvenNum(0);
checkOddAndEvenNum(5);
checkOddAndEvenNum(4);
