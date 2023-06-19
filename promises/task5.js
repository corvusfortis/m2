
// let promise = new Promise(resolve => {
//   setTimeout(resolve, 200, 'its alive');
// });

// function promiseWithTimeout(promise, ms) {
//   let timeout = new Promise(resolve => {
//       setTimeout(resolve, ms, 'time is up');
//   });
  
//   Promise.race([promise, timeout]).then(value => console.log(value));
// }

// 

//  Напишите функцию promiseWithTimeout,
//   которая принимает промис и максимальное количество миллисекунд, 
//   которое он может занять. Если промис разрешается до того, 
//   как истечет время ожидания, функция должна вернуть результат промиса.
//    В противном случае функция должна отклонить промис с ошибкой "Timeout Error".

function promiseWithTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    // Устанавливаем таймаут
    const timeoutId = setTimeout(() => {
      reject(new Error("Timeout Error"));
    }, timeout);

    // Обрабатываем промис
    promise
      .then((result) => {
        clearTimeout(timeoutId); // Отменяем таймаут
        resolve(result); // Возвращаем результат промиса
      })
      .catch((error) => {
        clearTimeout(timeoutId); // Отменяем таймаут
        reject(error); // Возвращаем ошибку промиса
      });
  });
}

let promise = new Promise(resolve => {
  setTimeout(() => resolve(console.log('done')), 2000);
});


promiseWithTimeout(promise, 1000);




