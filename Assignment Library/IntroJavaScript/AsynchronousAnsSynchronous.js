//synchronous and Asynchronous

console.log("ONE");
console.log("TWO");
console.log("THREE");

console.log("ONE");
setTimeout(() => console.log("TWO"), 1000);
console.log("THREE");
