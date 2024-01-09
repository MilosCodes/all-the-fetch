// //the simplest fetch you can use and still have error handling
// const url = 'https://jsonplaceholder.typicode.com/users';

//  export function getData() {
//   fetch(url)
//   .then((resp) => {
//     if (!resp.ok) throw new Error('was not a valid response');
//     return resp.json(); // METHOD to extract JSOn String and convert to it an Object.
//   })
//   .then((dataobjc) => {
//     console.log(dataobjc)
//   })
//   .catch((error) => {
//     console.warn('Error, the it catched', error)
//   });
// }

// function fred(resp) {}

// console.log(getData());