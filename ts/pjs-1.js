let object = {
    _id: 1234,
    name: 'user',
};

function updateValueByKey(obj, key, value) {
   if (key in obj && typeof obj[key] === typeof value) {
       obj[key] = value; 
   } else {
       return 'Invalid';
   }
   
   return obj;
}

console.log(updateValueByKey(object, '_id', '54321'));

updateValueByKey('_id', '124124') //invalid
updateValueByKey('_id', 1234) //valid
updateValueByKey('name', 'asdfasdf') //valid
updateValueByKey('name', 223) //invalid
