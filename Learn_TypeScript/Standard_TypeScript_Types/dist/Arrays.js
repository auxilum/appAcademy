var items = [];
items.push(1);
items.push("two");
items.push(false);
console.log(items);
var numbers = [];
numbers.push(1);
numbers.push("two");
numbers.push(false);
var numbers1 = [1, "two", false];
console.log(numbers1);
var strings = ["one", "two", "three"];
var array = [1, 2, 3];
console.log(array);
var newArray = ["one", "two", "three"];
function logScores(firstName) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(firstName, scores);
}
logScores("Mike", 90, 65, "65");
