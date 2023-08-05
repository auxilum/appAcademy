export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Bruno Babojelic";
    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    const heade = document.getElementById("header1");
    heade.innerText = "I am Bruno Babojelic";
    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    const firstParagraph = document.getElementById("secondP");
    firstParagraph.innerText = "Hi, my name is (what?)My name is (who?) My name is (chka-chka, Bruno) Hi, my name is (huh?) My name is (what?) My name is (chka-chka, Bruno)"
    // Your code here
}