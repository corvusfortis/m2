console.log('1'); 
setTimeout(() => {
 console.log('2');
 Promise.resolve().then(() => console.log('3')); 
}, 0);
Promise.resolve().then(() => console.log('4')); 
console.log('5');

//main: 1, 5
//micro: 4
//macro: 2, 3(to micro)

//console: 1, 5, 4, 2, 3