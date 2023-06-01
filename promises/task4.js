// Задача: Реализуйте функцию runInOrder(functions, delays), которая принимает массив функций и массив задержек,
// и выполняет функции в указанном порядке с соответствующими задержками.


// function runInOrder(functions, delays) {
//  // Ваш код здесь
// }

// const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
// const delays = [2000, 1000, 3000];

// runInOrder(functions, delays); 
// logs "first" after 2 seconds, "second" after another 1 second, and "third" after another 3 seconds


async function runInOrder(functions, delays) {
  for (let i = 0; i < functions.length; i++) {
     await new Promise(resolve => setTimeout(() => resolve(functions[i]()), delays[i]));
  }
}

const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
const delays = [2000, 1000, 3000];

runInOrder(functions, delays); 


//synchronous variant

// let functions = [() => console.log('first'), () => console.log('second'), () => console.log('third')];

// function retFuncs (arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i]();
//     }
// }

// retFuncs(functions);