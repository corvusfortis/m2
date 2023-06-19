// let arr = [1, 2, 3, 4, 5, 6];

// async function parallel(promises, limit) {
    
//     async function execute(iterator) {
//         for(let value of iterator) {
//             await new Promise(resolve => {
//                 setTimeout(() => resolve(console.log(value)), 2000);
//             })
//         }
//     }

// const iterator = Array.from(promises).values();

// const workers = new Array(limit).fill(iterator).map(execute);

// await Promise.allSettled(workers);

// console.log('Done!');

// }

// parallel(arr, 2);

//решение похоже на правду, нужно доразобраться


//  IMPORTANT REFERENCE FOLLOWS

// async function doWork(iterator) {
//   for (const value of iterator) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log(value);
//   }
//   await Promise.allSettled(workers);
// }

// const iterator = Array.from('abcdefghi').values();

// // Run async tasks with a concurrency limit of 3
// const workers = new Array(3).fill(iterator).map(doWork);

// // Wait until all tasks are done


// console.log('Done!');

// https://maximorlov.com/parallel-tasks-with-pure-javascript/

//shunk [1,2,3,4] -> [[1,2], [3,4]]

// runParallel()
// iter()
// 		if (cur_arr.length < chunkSize) push(); iter();
// 		else runParalle(); iter()

function parallelWithLimit(arr, limit) {
  return new Promise(_resolve => {

  let length = arr.length;
  let curIndex = 0;
  let results = [];
  let resCount = 0;

  for (let i = 0; i < limit; i++) {
      runNext(arr)
  }

  function runNext() {

      let index = curIndex++
      let fn = arr[index];
      if (!fn) {
          return;
      }
      console.log("qqqqq STARTT::::::::::::", index);
      fn().then((res) => {
              console.log("qqqqq FINISH", index);
              tryRes(res, index)
          })
  }

  function tryRes(r, index) {
      results[index] = r;
      if (++resCount === length) {
          console.log("qqqqq results", results);
          _resolve(results)
      }
      runNext();
  }


})
}

function delay(ms) {
  return () => new Promise(resolve => {
      setTimeout(() => {
          resolve('Function ms ' + ms)
      }, ms)
  })
}

parallelWithLimit([
  delay(900),
  delay(1000),
  delay(800),
  delay(700),
  delay(100),
  delay(901)
], 2)
  .then(r => {
      console.log("qqqqq Done", r);
  })