declare module 'stats' {
  type Comparator<T> = (a: T, b: T) => number; //function with 2 arguments, returns number

  type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number; //functions receives array of numbers and comparator
  //returns number
  export const getMaxIndex: GetIndex;
  export const getMinIndex: GetIndex;
  export const getMedianIndex: GetIndex;
//apply this type to all Index functions
  type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null; //function receives array of elememnts
  //and comparator. Returns either element or null
  export const getMaxElement: GetElement;
  export const getMinElement: GetElement;
  export const getMedianElement: GetElement;
//apply to all get functions
  export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;
  //function receives arry of elements and... and.. what on earth is going on
}