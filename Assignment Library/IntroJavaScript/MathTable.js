//1.Write a program to create a Mathematical calculation table from 0 to given number n.

function mathTabel(table, n) {
    for (let i = 1; i <= n; i++) {
        console.log(`MathTabel ${table} * ${i} = ${table * i} `);
    }
}
mathTabel(5, 10);
