export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    let elementById = document.getElementById(id);
    return elementById;
    // Your code here
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    let firstOfTag = document.getElementsByTagName(tag);
    return firstOfTag[0];
    // Your code here
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    let elementOfClass = document.getElementsByClassName(cls);
    return elementOfClass[0];
    // Your code here
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    let elementOFTag = document.getElementsByTagName(tag);
    return elementOFTag;
    // Your code here
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    let elementOfClass = document.getElementsByClassName(cls);
    return elementOfClass;
    // Your code here
}