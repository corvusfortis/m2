












// Задача: Реализуйте функцию asyncEvery(array, predicate), 
//которая работает аналогично Array.prototype.every(), 
//но с поддержкой асинхронных предикатов.

// async function asyncEvery(array, predicate) {
//  // Ваш код здесь
// }

// const array = [1, 2, 3, 4, 5];
// asyncEvery(array, async (num, index) => {
//  await delay(50);
//  return num < 4;
// }).then((res) => console.log(res)); // [true, true, true, false, false]


// Array.prototype.copyEvery = (predicate) => {
//   let arr = this;
//   for(let i = 0; i < arr.length; i++) {
//     let res = predicate(arr[i], i, arr);
//     if (!res) {
//       return false;
//     };
//   };

//   return true;
// };


// console.log([1, 2, 3].copyEvery(function(e) {
//   return e < 5;
// }))


async function asyncEvery(array, predicate) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let result = await predicate(array[i], i, array);
    if (!result) {
      res.push(false);
    } else {
      res.push(true);
    }
  };

  return res;
 };
 
 const array = [1, 2, 3, 4, 5];
 asyncEvery(array, async (num, index) => {
  await delay(50);
  return num < 4;
 }).then((res) => console.log(res)); // [true, true, true, false, false]

 function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}