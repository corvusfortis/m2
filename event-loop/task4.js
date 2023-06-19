console.log('1'); 
setTimeout(() => {
 console.log('2');
 Promise.resolve().then(() => {
   console.log('3'); 
   setTimeout(() => console.log('4'), 0); 
 });
}, 0);
setTimeout(() => console.log('5'), 0); 
Promise.resolve().then(() => console.log('6'));
console.log('7'); 