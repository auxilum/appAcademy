function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    console.log (num / 3);
};

divideByThree(6);

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    console.log ((num1+num2)/2);
};

averageOfTwo(2,6);

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    console.log ((num1+num2+num3+num4)/4);
};

averageOfFour(3,4,1,5);

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let newArr = [];
    for (let i=0; i < nums.length; i++){
        newArr.push(nums[i]*2);
    }
    console.log(newArr);
};

doubler([2,3,4,5,6,7]);

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
    let arr3 = arr1.concat(arr2);
    console.log(arr3);
};

combineArrays([2,4,2,3],[2,3]);

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
    if (arr.indexOf(word) === -1){
        console.log ("Rijec se ne nalazi u listi");
    } else {
        console.log ("Rijec se nalazi u listi");
    }
};

wordWithinArray('plava', ['plava', 'crvne','ljusvbi', 'slad']);

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g. 
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
    let echooo = str.toUpperCase() + "..." + str + "..." + str.toLowerCase();
    console.log(echooo);
};

echo("Mom!");

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
    let arr = [];
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            arr.pop(i);
        } else if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
};

fizzBuzz(35);

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    let message = "Hello " + name; 
    console.log (message);
};

hello("Antonija");

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    let message = "Bye, " + name;
    console.log(message);
};

goodbye("Antonija");

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
    if (num === 5){
        console.log("True");
    } else {
        console.log("False");
    }
};

isFive(5);

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
    if (num % 2 === 0) {
        console.log("True");
    } else {
        console.log("False");
    }
};

isOdd(10);

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    let search = searchString.toLowerCase();
    let sub = subString.toLowerCase();
    if (sub.includes(search) === true) {
        console.log("True");
    } else {
        console.log("False");
    }
};

isSubString('plAva', 'Plava boja zaborava');

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /* 
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'A') {
            counter += 1;
        }
    }
    console.log ("In your word there is " + counter + " letters a");
};

aCounter("sdfgggggg");

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter   
}