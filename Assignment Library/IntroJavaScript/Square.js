// 2. Write a program to find the square of given number from 0 to n.

function square(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`square ${i} * ${i} = ${i * i}`);
    }
}
square(9);
