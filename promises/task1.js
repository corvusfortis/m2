// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), ms);
//   })
//  }
//  delay(3000).then(() => console.log('Runs after 3 seconds'));
//  console.log('runs instantly');

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
 }
 delay(3000).then(() => console.log('Runs after 3 seconds'));