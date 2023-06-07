console.log('2'); 

setTimeout(() => {
  console.log('14');
  Promise.resolve().then(() => console.log('8')).then(() => console.log('7'));
}, 0);

console.log('5');

new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log('4')
  });

  Promise.resolve().then(() => console.log('11'))

  console.log('3');
});

setTimeout(() => {
  console.log('6');
}, 100);

console.log('12');

setTimeout(() => {
  console.log('13');
}, 0);

Promise.resolve().then(() => console.log('15')).then(() => console.log('9'));

console.log('4');