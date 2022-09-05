// function printPartten(row, col) {
//     let str;
//     for (let i = 0; i < row; i++) {
//         str = "";
//         for (let j = 0; j < col; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
// printPartten(5, 5);

//======================================================

// function printPartten(row) {
//     let str;
//     for (let i = 1; i <= row; i++) {
//         str = " ";
//         for (let j = 1; j <= row - i; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
// printPartten(5);

//==============================================================

// function printPartten(row) {
//     let str;
//     for (let i = 1; i <= row; i++) {
//         str = " ";
//         for (let j = 1; j <= row - i; j++) {
//             str += " ";
//         }
//         for (let k = 0; k != 2 * i - 1; k++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
// printPartten(5);
