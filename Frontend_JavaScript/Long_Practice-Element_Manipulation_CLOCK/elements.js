export const liToDetails = function(text) {
    const li = document.createElement("li");
    li.setAttribute("class", "detail");
    li.innerText = text;
    document.querySelector(".details").appendChild(li);
};

export const createTextElement = function (element, text) {
    const createElem = document.createElement(element);
    createElem.innerText = text;
    document.body.appendChild(createElem);
    //console.log(createElem);
};