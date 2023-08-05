/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () =>  {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image
        
        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const dogBreed = url.split("/")[4];
        console.log(dogBreed);
        
        
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        //const newDogImage = () => {
            const dogPicture = document.createElement("img");
            dogPicture.src = url;
            //document.body.appendChild(dogPicture);
        //};

        //const figCaption = () => {
            const fig = document.createElement("figcaption");
            fig.innerText = dogBreed;
            //document.body.appendChild(fig);
        //};

        //const figure = () => {
            const figure = document.createElement("figure");
            figure.appendChild(dogPicture);
            figure.appendChild(fig);
            //console.log(figure);
            //document.body.appendChild(figure);
        //};
        
            const liItem = document.createElement("li");
            liItem.appendChild(figure);
            //console.log(liItem);
        //figCaption();
        //newDogImage();
        //figur();

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const addDog = document.querySelector(".gallery");
        const unorderedList = addDog.querySelector("ul");
        unorderedList.appendChild(liItem);
        //console.log(unorderedList);
        
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const removeLastDog = document.querySelector(".gallery");
    const unorderedList = removeLastDog.querySelector("ul");
    const firstListItem = unorderedList.firstElementChild;
    //console.log(firstListItem);
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstListItem.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const removeLastDog = document.querySelector(".gallery");
    const unorderedList = removeLastDog.querySelector("ul");
    const lastListItem = unorderedList.lastElementChild;
    //console.log(lastListItem);
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastListItem.remove();
});