// function printPartten(row) {
//     let str;
//     for (let i = 1; i <= row; i++) {
//         str = "";
//         for (let j = 1; j <= row; j++) {
//             str += i;
//         }
//         console.log(str);
//     }
// }
// printPartten(5);

//================================
// function printPartten(row) {
//     let str;
//     for (let i = 1; i <= row; i++) {
//         str = "";
//         for (let j = 1; j <= row; j++) {
//             str += j;
//         }
//         console.log(str);
//     }
// }
// printPartten(5);

//================================================
// function printPartten(row) {
//     let str;
//     for (let i = 1; i <= row; i++) {
//         str = "";
//         for (let j = 1; j <= row ; j++) {
//             str += " ";
//         }
//         for (let k = 0; k != 2 * i - 1; k++) {
//             str += i;
//         }
//         console.log(str);
//     }
// }
// printPartten(5);

//=====================================================
// function printPartten(row) {
//     let str;
//     for (let i = 1; i <= row; i++) {
//         str = "";
//         for (let j = 1; j <= row -1; j++) {
//             str += " ";
//         }
//         for (let k = 0; k != 2 * i - 1; k++) {
//             str += i;
//         }
//         console.log(str);
//     }
// }
// printPartten(5);

//===================================================
function printPartten(row, val, col) {
    let str;

    for (let i = 1; i <= row; i++) {
        str = "";
        val = i;
        col = 2 * i - 1;
        for (let j = 1; j <= row - i; j++) {
            str += " ";
        }
        for (let k = 0; k != col; k++) {
            str += val;
            if (k < col / 2 - 1) {
                val--;
            } else {
                val++;
            }
        }
        console.log(str);
    }
}
printPartten(5);
