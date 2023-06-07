class Observable<T> { //define class, assign generic type
  private observers: ((data: T) => void)[]; //?????


  constructor() { //define constructor
      this.observers = []; //observers array is empty first
  }


  subscribe(fn: (data: T) => void) { //subscribe method, argument is generic type, returns nothing
      this.observers.push(fn); //pushes function to array (subscribes)
  }


  notify(data: T) { //notify (generic type)
      this.observers.forEach(fn => fn(data)); //execute each function in observers
  }
}


const observable = new Observable<number>();
observable.subscribe(data => console.log("Observer 1: ", data));
observable.subscribe(data => console.log("Observer 2: ", data));


observable.notify(10); // "Observer 1: 10" and "Observer 2: 10" will be logged to the console
