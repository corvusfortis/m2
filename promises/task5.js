
let promise = new Promise(resolve => {
  setTimeout(resolve, 200, 'its alive');
});

function promiseWithTimeout(promise, ms) {
  let timeout = new Promise(resolve => {
      setTimeout(resolve, ms, 'time is up');
  });
  
  Promise.race([promise, timeout]).then(value => console.log(value));
}

promiseWithTimeout(promise, 1000);

//  Напишите функцию promiseWithTimeout,
//   которая принимает промис и максимальное количество миллисекунд, 
//   которое он может занять. Если промис разрешается до того, 
//   как истечет время ожидания, функция должна вернуть результат промиса.
//    В противном случае функция должна отклонить промис с ошибкой "Timeout Error".