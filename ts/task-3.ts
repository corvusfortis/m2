function pickProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {  //assign generic type T to object,
  //generic Type K to key, which extends T. Keys are an array, so keys: K[]. Type of return value depends on keys,
  //which are in original object. Thus, return value is Pick<T, K>.
  let result = {} as Pick<T, K>; //assign return type to result
  keys.forEach((key) => { //assing keys to result
      result[key] = obj[key];
  });
  return result; //return according to criteria
}


const _user = { _id: 1, name: 'John', age: 30 };
const pickedUser = pickProperties(_user, ['name', 'age']); // valid
const pickedUser2 = pickProperties(_user, ['name', 'age2']); // invalid
console.log(pickedUser);
console.log(pickedUser2);