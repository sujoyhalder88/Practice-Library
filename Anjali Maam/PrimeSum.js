function primesum(n) {
    if (n == 0 || n == 1) {
        return false;
    }
    let sq = Math.sqrt(n);
    for (let i = 2; i <= n; i++) {
        if (n % 2 == 0) {
            return "Not a Prime";
        } else if (n % sq == 0) {
            return "Not a Prime";
        } else {
            return "It's Prime";
        }
    }
}
console.log(primesum(7));

function printAllPrimeNumber(n) {
    let PrimeArray = [];
    if (n == 0 || n == 1) console.log("false");
    for (let i = 2; i <= n; i++) {
        let occor = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                occor = 1;
                break;
            }
        }
        if (i > 1 && occor == 0) {
            // console.log(i);
            PrimeArray.push(i);
        }
    }
    console.log(PrimeArray);
}
printAllPrimeNumber(37);
