console.log('1');
setTimeout(() => console.log('2'), 1000);
Promise.resolve().then(() => console.log('3')).then(() => console.log('4'));
console.log('5');
setTimeout(() => console.log('6'), 0);
Promise.resolve().then(() => console.log('7'));
console.log('8');