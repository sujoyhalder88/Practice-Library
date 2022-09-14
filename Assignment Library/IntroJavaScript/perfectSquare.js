//3)Program to check if a number is a perfect square
function perfectSquare(n) {
    if (n < 0) console.log(false);
    let sq = Math.sqrt(n);
    n % sq == 0 ? console.log("square") : console.log("not");
}
perfectSquare(12);
perfectSquare(21);
perfectSquare(25);
