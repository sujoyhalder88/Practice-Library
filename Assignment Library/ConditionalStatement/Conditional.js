/***
 * Problem 1 –
Create a program which gives output for children to go out in park if the temperature is between 20
degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
should not step out of the home.
 */

function temperature(n) {
    if (n >= 20 && n <= 25) {
        console.log("Yah!go out and play");
    } else if (n >= 18 && n <= 20) {
        console.log("play in school");
    } else {
        console.log("stay home");
    }
}
temperature(17);
