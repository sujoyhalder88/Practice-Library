function armstrongNumber(num) {
    let temp = num;
    let result = 0;
    let remender;
    while (temp > 0) {
        remender = temp % 10;
        result += remender * remender * remender;
        temp = parseInt(temp / 10);
        console.log(`${remender} ..${result}..${temp}`);
    }
    if (num == result) {
        return "armstrongNumber";
    } else {
        return "not armstrongNumber";
    }
}
console.log(armstrongNumber(370));
