const nestedArray = [1, [2, [3, 4, [5]]], 6];

function flattenArray(arr) {
    while (arr.some(e => Array.isArray(e))) {
        arr = arr.flat();
    }
    
    return arr;
}

console.log(flattenArray(nestedArray)); 