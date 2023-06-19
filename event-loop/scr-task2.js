console.log('9');

setTimeout(() => {
  console.log('11');
  Promise.resolve().then(() => console.log('8')).then(() => console.log('6'));
}, 0);

console.log('3');

new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log('4')
  });

  Promise.resolve().then(() => console.log('7'))

  console.log('14');
});

setTimeout(() => {
  console.log('2');
}, 100);

console.log('15');

setTimeout(() => {
  console.log('1');
}, 0);

Promise.resolve().then(() => console.log('13')).then(() => console.log('10'));

console.log('4');