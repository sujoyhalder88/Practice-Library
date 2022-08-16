// write a function checkes number odd or even using comperison opperator ?

function oddAndEven(n) {
    if (n % 2 == 0) {
        console.log(`${n} is Even number`);
    } else {
        console.log(`${n} is Odd number`);
    }
}
oddAndEven(5);
oddAndEven(10);

// write a function checkes number odd or even using bitwise opperator ?
function oddAndEven(n) {
    if (!(n & 1)) {
        console.log(`${n} is Even number`);
    } else {
        console.log(`${n} is Odd number`);
    }
}
oddAndEven(5);
oddAndEven(10);
