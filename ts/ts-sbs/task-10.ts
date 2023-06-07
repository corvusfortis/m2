type AsyncCb<T> = (callback: (response: ApiResponse<T>) => void) => void; //callback functions calls
//api response
type Pr<T> = () => Promise<T>; //type of function which calls promise


export function promisify<T>(fn: AsyncCb<T>): Pr<T> { //we have callback as an argument here
  //and promise as a return type
    return () => new Promise((resolve, reject) => { //return function, which calls promise
      //which calls async callback
        fn((response) => {
            if(response.status === 'success'){
              resolve(response.data);
            } else {
              reject(response);
            }
        })
    })
}