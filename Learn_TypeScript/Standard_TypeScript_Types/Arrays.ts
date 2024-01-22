const items = [];
items.push(1);
items.push("two");
items.push(false);

console.log(items);

const numbers: Array<number> = [];
numbers.push(1);
numbers.push("two");
numbers.push(false);

const numbers1: Array<number> = [1, "two", false];

console.log(numbers1);

const strings: string[] = ["one", "two", "three"];

const array = [1, 2, 3];

console.log(array);

const newArray = ["one", "two", "three"];

function logScores(firstName: string, ...scores: number[]) {
  console.log(firstName, scores);
}

logScores("Mike", 90, 65, "65");
