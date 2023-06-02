console.log('1'); //to main
setTimeout(() => {
 console.log('2'); //to macro
 Promise.resolve().then(() => {
   console.log('3'); //to micro
   setTimeout(() => console.log('4'), 0); //to macro
 });
}, 0);
setTimeout(() => console.log('5'), 0); //to macro
Promise.resolve().then(() => console.log('6')); //to micro
console.log('7'); // to main


//main: 
//micro:
//macro: 5, 4


//console: 1, 7, 6, 2, 3, 5, 4