// let data = 'http://fake.com'


// function callb() {
//   console.log('all done!');
// }

// function fetchData(url, callback) {
//   let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(console.log(url)), 2000);
//   });
//   return promise.then(() => callback());
//  }

//  fetchData(data, callb);

 function fetchData(url, callback) {
  let promise = new Promise(resolve => {
      setTimeout(() => resolve(console.log(url)), 2000);
  });
  
  return promise.then(() => callback());
}


let data = 'http://url.com';
let fn = () => console.log('callback resolved');

fetchData(data, fn);