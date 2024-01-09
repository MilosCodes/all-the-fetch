// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = 'https://jsonplaceholder.typicode.com/users';

export async function getData() {
  try {
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) throw new Error('not a valid response');
    const dataObjc = await response.json();
    console.log(dataObjc);
  } catch (error) {
    console.warn(error.message);
  }
}
