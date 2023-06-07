// Define the NestedArray<T> type
type NestedArray<T> = T | NestedArray<T>[];
//generic type for NestedArray can be either array element or 
// Nested array of elements.  


// Define the flattenArray function
function flattenArray<T>(arr: NestedArray<T>): T[] { //define function types. Generic for type of array elements,
  //nested array for argument and array of elements as a result.
   let result: T[] = [];


   const flatten = (item: NestedArray<T>) => { // for each item in argument array, which can be either element or
    //array of elements
       if (Array.isArray(item)) { //if element is array, execute function for each element
           for (let element of item) {
               flatten(element);
           }
       } else { //if element is not array, simply push to result
           result.push(item);
       }
   };


   flatten(arr); //flatten the argument
   return result;
}

//or

function flattenArray<T>(arr: NestedArray<T>): T[] {
  while(arr.some((e: NestedArray<T>) => Array.isArray(e))) {
      arr = arr.flat();
  }
  
  return arr;
}

const nestedArray: NestedArray<number> = [1, [2, [3, 4, [5]]], 6];
