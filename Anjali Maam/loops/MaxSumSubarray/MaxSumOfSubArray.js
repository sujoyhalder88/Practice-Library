//function to check if the mid can be Maximum sub Array sum

function check(arr, mid, n, k) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > mid) {
            return false;
        }
        // increase sum of current sub array
        sum += arr[i];
        // if sum if greater than mid than increase the count
        if (sum > mid) {
            count++;
            sum = arr[i];
        }
    }
    count++;
    if (count <= k) {
        return true;
    }
    return false;
}

// function to find maximum sub array  sum which is minimum

function solve(arr, n, k) {
    let Max = arr.reduce((a, b) => Math.max(a, b));
    let start = Max; // max sub array sum considering length of subArray as 1
    let end = 0;

    for (let i = 0; i < n; i++) {
        end += arr[i]; // max sub array sum considering length of subArray as n
    }

    // answer store possible maximum sub array sum
    let answer = 0;
    let mid;
    while (start <= end) {
        mid = Math.floor(start + end) / 2;
    }

    // if mid is the possible solution
    if (check(arr, mid, n, k) == true) {
        answer = mid;
        end = mid - 1;
    } else {
        start = mid + 1;
    }
    return answer;
}
let arr = [1, 2, 3, 4];
let n = arr.length;
let k = 3;

console.log(solve(arr, n, k));
