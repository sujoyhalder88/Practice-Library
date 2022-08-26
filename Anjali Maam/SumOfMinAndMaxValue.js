// write a program print sum of maxmin value and minimum value ?
/*
input =[5,1,2,9]
output:
maximumvalue=16
minimumvalue=8
*/

function sumOfMinMaxValue(n) {
    let sum = 0;
    let maxValue = n[0];
    let minValue = n[0];
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    for (let i = 0; i < n.length; i++) {
        if (maxValue > n[i]) {
            maxValue = n[i];
        }
        if (minValue < n[i]) {
            minValue = n[i];
        }
    }
    return `the total sum maxvalue ${sum - maxValue} and sum minvalue ${
        sum - minValue
    }`;
}
console.log(sumOfMinMaxValue([5, 1, 2, 9]));
