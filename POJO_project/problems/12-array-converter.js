/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    let key = array[i];
    if (obj[key] === undefined) {
      counter++;
      obj[key] = counter;
      //console.log(obj);
      // console.log(key);
    } else if (key in obj) {
      obj[key]++;
      //console.log(obj[key]);
      //console.log(counter);
    }
  }
  console.log(obj);
}

console.log(arrayConverter(["apple", "apple", "apple"])); // => {apple: 3}
console.log(arrayConverter(["mango", "mango", "pineapple"])); // => {mango: 2, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
