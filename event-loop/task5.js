console.log('1');
setTimeout(() => console.log('2'), 1000);
Promise.resolve().then(() => console.log('3')).then(() => console.log('4'));
console.log('5');
setTimeout(() => console.log('6'), 0);
Promise.resolve().then(() => console.log('7'));
console.log('8');


//main: 1, 5, 8
//micro: 3, 7, 4
//macro: 2(1000), 6

//console: 1, 5, 8, 3, 4, 7, 2, 6