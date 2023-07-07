function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArr =[];
    for (let i = 1; i < arr.length; i += 2){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

oddIndices([1,3,4,5,6,7,3,2,1]);

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr =[];
    for (let i = arr.length-1; i > 0; i -= 2){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

oddReverse([9,8,7,6,5,4,3,2,1]);

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newArr =[];
    for (let i = 1; i < arr.length; i *= 2){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

secondPower([2,3,4,5,6,7]);

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newArr =[];
    for (let i = 1; i < arr.length; i *= n){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

nthPower([2,3,4,5,6,7],5);

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let newArr =[];
    for (let i = 0; i <= (Math.ceil(arr.length / 2)); i++){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

firstHalf([2,4,5,3,4,5,6,6,6,5,4,3]);

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newArr =[];
    for (let i = (Math.ceil(arr.length / 2)); i < arr.length ; i++){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

secondHalf([2,3,3,2,2,3,4,6,66,5,4,4,5]);

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}