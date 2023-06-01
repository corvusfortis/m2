
function parallelPromisesWithLimit(promisesArr, parallelLimit) {

}


let promises = [new Promise(resolve => setTimeout(resolve, 2000, '1')), 
                new Promise(resolve => setTimeout(resolve, 2000, '2')),
                new Promise(resolve => setTimeout(resolve, 2000, '3')),
                new Promise(resolve => setTimeout(resolve, 2000, '4')),
                new Promise(resolve => setTimeout(resolve, 2000, '5')),
                new Promise(resolve => setTimeout(resolve, 2000, '6')),
                new Promise(resolve => setTimeout(resolve, 2000, '7'))]

parallelPromisesWithLimit(promises, 3);



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