import { liToDetails, createTextElement } from './elements.js';


const h1Element = document.createElement("h1");
h1Element.setAttribute("id", "header");
h1Element.setAttribute("class", "name");
h1Element.innerText = "Bruno Babojelic";
document.body.appendChild(h1Element);

const ul = document.createElement("ul");
ul.setAttribute("class", "details");
document.body.appendChild(ul);


function currentTime() {
    setTimeout(() => {
        const date = new Date();
        let currentHours = date.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        let currentMinutes = date.getMinutes();
        currentMinutes = ("0" + currentMinutes).slice(-2);
        let currentSeconds = date.getSeconds();
        currentSeconds = ("0" + currentSeconds).slice(-2);
        let time = `${currentHours}:${currentMinutes}:${currentSeconds}`;
        //console.log(time);

        document.querySelector(".timer").innerHTML = time;
        
        currentTime();
    }, 1000);
}; 
    
currentTime();

const divTime = document.createElement("div");
divTime.setAttribute("class", "timer");


const liClock = document.createElement("li");
liClock.setAttribute("class", "detail");
document.querySelector(".details").appendChild(liClock);
document.querySelector(".detail").appendChild(divTime);


liToDetails("hello world");
liToDetails("Finnaly");


createTextElement("h2", "Hi my naaame is");

createTextElement("p", "Antonija ide kuhati filovane paprike");