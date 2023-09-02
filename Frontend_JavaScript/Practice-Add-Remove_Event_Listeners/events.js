// Your code here
//window.addEventListener("DOMContentLoaded", event => {
//   alert("DOM is loaded!!!");
//});

const redInput = document.querySelector("#red-input");
const section1 = document.querySelector("#section-1");

//redInput.addEventListener("input", event => {
// if (redInput.value === "red"){
//     section1.style.backgroundColor = "red";
// }
//  else {
//      section1.style.backgroundColor = "transparent";
//  }
//});

redInput.addEventListener("input", isItRed);

function isItRed() {
  if (redInput.value === "red") {
    section1.style.backgroundColor = "red";
  } else {
    section1.style.backgroundColor = "transparent";
  }
}

const submitButton = document.querySelector("#add-item");
const ulList = document.getElementById("list");

//submitButton.addEventListener("click", event => {
//const text = document.querySelector("#list-add");
//text.addEventListener("input", event => {
// });
// console.log(text.value);
// const liElement = document.createElement("li");
// liElement.innerText = text.value;
// ulList.appendChild(liElement);
//});

submitButton.addEventListener("click", addText);

function addText() {
  const text = document.querySelector("#list-add");
  text.addEventListener("input", (event) => {});
  console.log(text.value);
  const liElement = document.createElement("li");
  liElement.innerText = text.value;
  ulList.appendChild(liElement);
}

const colorPicker = document.querySelector("#color-select");

colorPicker.addEventListener("input", (event) => {
  //we can use "change" - color
  //change after selection
  let section3 = document.querySelector("#section-3");
  section3.style.backgroundColor = event.target.value;
});

//colorPicker.addEventListener("input", colorPick);

const removeListeners = document.querySelector("#remove-listeners");

removeListeners.addEventListener("click", (event) => {
  submitButton.removeEventListener("click", addText);
  //colorPicker.removeEventListener("input", colorPick);
  redInput.removeEventListener("input", isItRed);
});

//function colorPick () {
//  let section3 = document.querySelector("#section-3");
// section3.style.backgroundColor = colorPicker.target.value;
//};

window.addEventListener("keypress", logKey);

function logKey(key) {
  if (key.code === "Space") {
    alert("You pressed space key!!!!");
  }
}

const div1 = document.createElement("div");
document.body.appendChild(div1);
div1.style.height = "200px";
div1.style.width = "300px";
div1.style.backgroundColor = "pink";

div1.addEventListener("mouseenter", (event) => {
  const para = document.createElement("p");
  para.innerText = "You hovered over div element";
  div1.appendChild(para);
});
