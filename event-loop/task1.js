//task 1

console.log("1"); //1
setTimeout(() => console.log("2"), 0); //4
Promise.resolve().then(() => console.log("3")); //3
console.log("4"); //2



//main: 1, 4
//micro: 3
//macro: 2

//console: 1, 4, 3, 2