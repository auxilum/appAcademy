// Your code here
const inputText = document.getElementById("name");
const selectOption = document.getElementById("type");
const addButton = document.getElementById("add");
//console.log(addButton);
const uList = document.getElementById("shopping-list");

addButton.addEventListener("click", addText);

function addText(e) {
  e.preventDefault();
  inputText.addEventListener("input", () => {});
  selectOption.addEventListener("select", () => {});
  const liItem = document.createElement("li");

  liItem.setAttribute("data-type", selectOption.value);

  liItem.innerText = inputText.value;

  uList.appendChild(liItem);
  inputText.value = "";
}
