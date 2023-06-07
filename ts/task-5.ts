type Listener<T> = (event: T) => void;

class EventEmitter<T> {
   private listeners: Listener<T>[] = [];

   addListener(listener: Listener<T>): void {
       this.listeners.push(listener);
   }

   removeListener(listener: Listener<T>): void {
       const index = this.listeners.indexOf(listener);
       if (index > -1) {
           this.listeners.splice(index, 1);
       }
   }

   emit(event: T): void {
       for (const listener of this.listeners) {
           listener(event);
       }
   }
}

// Usage
const stringEventEmitter = new EventEmitter<string>();

stringEventEmitter.addListener((event) => {
   console.log(`Received event: ${event}`);
});

stringEventEmitter.emit('Hello, World!');