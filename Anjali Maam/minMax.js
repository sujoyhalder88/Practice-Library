// write a program find the sum in maxmam number and minimam number ?

// function sumOfMinMax(arr, n) {
//     let minVal = Number.MAX_VALUE;
//     let maxVal = Number.MIN_VALUE;
//     for (let i = 0; i < n; i++) {
//         if (minVal > arr[i]) {
//             minVal = arr[i];
//         }
//         if (maxVal < arr[i]) {
//             maxVal = arr[i];
//         }
//     }
//     return maxVal + minVal;
// }
// let arr = [1, 8, 5, 9];
// let n = arr.length;
// console.log(sumOfMinMax(arr, n));

function sumOfMinMax(arr, n) {
    let minVal = arr[0];
    let maxVal = arr[0];
    for (let i = 0; i < n; i++) {
        if (minVal > arr[i]) {
            minVal = arr[i];
        }
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return maxVal + minVal;
}
let arr = [25, 3, 48, 100];
let n = arr.length;
console.log(sumOfMinMax(arr, n));
