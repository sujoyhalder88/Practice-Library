function printPartten(row) {
    let str;
    for (let i = 1; i <= row; i++) {
        str = " ";
        for (let j = 1; j <= row - i; j++) {
            str += " ";
        }
        for (let k = 0; k != 2 * i - 1; k++) {
            str += "*";
        }
        console.log(str);
    }
}
printPartten(5);
