interface User {
  _id: number;
  name: string;
}

interface User {
  _id: number;
  name: string;
}

function updateValueByKey<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return {...obj, [key]: value};
}

//Initialize generics T and K which represents key type from T. Assing types in brackets. Values is assigned as
//obj[key], therefore the type will be T[K]. Function returns object, so return type will be T.

updateValueByKey({_id: 1, name: 'John'}, '_id', '124124'); //invalid
updateValueByKey({_id: 1, name: 'John'}, '_id', 1234); //valid
updateValueByKey({_id: 1, name: 'John'}, 'name', 'asdfasdf'); //valid
updateValueByKey({_id: 1, name: 'John'}, 'name', 223); //invalid

