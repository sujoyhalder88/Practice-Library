// const ConvarToBinary = (num) => {
//     let binaryNum = 0;
//     let rem,
//         quotient,
//         i = 1,
//         step = 1;
//     while (num != 0) {
//         rem = num % 2;
//         quotient = parseInt(num / 2);
//         console.log(
//             `step:${step}=>${num}/2, remainder = ${rem} quotient =${quotient}`
//         );
//         num = quotient;
//         step++;
//         binaryNum = binaryNum + rem * i;
//         i = i * 10;
//     }
//     console.log(binaryNum);
// };
// // ConvarToBinary(16);
// ConvarToBinary(8);
// ConvarToBinary(10);

//===================================================================//
// function ConvarToBinary(num) {
//     let bainaryNum = 0;
//     let i = 1;
//     let remainder;
//     let quotient;
//     while (num !== 0) {
//         remainder = num % 2;
//         quotient = parseInt(num / 2);
//         num = quotient;
//         bainaryNum = bainaryNum + remainder * i;
//         i = i * 10;
//     }
//     console.log(bainaryNum);
// }
// ConvarToBinary(7);
