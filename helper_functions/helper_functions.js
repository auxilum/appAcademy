/* Define a function isPrime(number) that returns true 
if number is prime. Otherwise, false. 
A number is prime if it is only divisible by 1 and itself. */

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

/* Write a function choosePrimes(nums) that takes in an array 
of numbers as args. The function should return a new array 
containing the primes from the original array. A prime number 
is a number that is only divisible by 1 and itself. Hint: consider 
creating a helper function to check if a number is prime! */

let isPrime = function(num) {
    if (num < 2){
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
};

let choosePrimes = function (array) {
    let primesArr = [];
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        if (isPrime(num)){
            primesArr.push(num);
        }
    }
    return primesArr;
};

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

/* Write a function nextPrime that accepts a number as an argument. 
The function should return the nearest prime number that is greater 
than the given number. */

let isPrime = function(num){
    if(num < 2){
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
};

function nextPrime(number){
    for (let i = number + 1; i >= number + 1; i++ ){
        if (isPrime(i)){
            return i;
        }
    }
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

/* Write a function primeFactors that accepts a number as an argument. 
The function should return an array containing all of the prime 
numbers that can divide the given number. */

let primeFactors = function(num){
    let newArr = [];
    for (let i = 0; i <= num; i++){
        if (num % i === 0 ){
            if (isPrime(i)){
                newArr.push(i);
            }
        }
    }
    return newArr;
};

let isPrime = function(number){
    if (number < 2){
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
};

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]

/* Write a function isAntiPrime that accepts a number as an argument. 
The method should return true if the given number has more divisors 
than all positive numbers less than the given number. For example, 
24 is an anti-prime because it has more divisors than any positive 
number less than 24. */

let numOfDivisors = function(num) {
    let newArr = [];
    for (let i = 0; i < num; i++){
        if (num % i === 0){
            newArr.push(i);
        }
    }
    return newArr.length;
};

let isAntiPrime = function(number){
    for (let i = 1; i < number; i++){
        if (numOfDivisors(i) >= numOfDivisors(number)){
            return false;
        }
    }
    return true;
};

console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false

/* Write a function mostVowels that takes in a sentence string 
and returns the word of the sentence that contains the most 
vowels. */

function mostVowels(sentence) {
    // your code here
    let newArr = sentence.split(" ");
    console.log (newArr);
    let biggest = 0;
    console.log (vowelCount(newArr[3]));
    for (let i = 0; i < newArr.length; i++) {
        if (vowelCount(newArr[i]) > biggest) {
            biggest = i;
        }
        
   }
    return newArr[biggest];
}

function vowelCount(word){
    let count = 0;
    let vowels="aeiou";
    for (let i = 0 ; i < word.length ; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
};

console.log(mostVowels("what a wonderful life")); // "wonderful"

/* Write a function allElseEqual that takes in an array of numbers. 
The function should return the element of the array that is equal 
to half of the sum of all elements of the array. If there is no 
such element, the method should return null. */

function allElseEqual(arr) {
    // your code here
    for (let i = 0; i < arr.length; i++){
        
        if (halfOfTheSum(arr) === arr[i]){
            return arr[i];
        }
    }
    return null;
};

let halfOfTheSum = function(array){
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum/2;
};

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null