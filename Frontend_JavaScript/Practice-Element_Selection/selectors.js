const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    //const seededFruit = document.querySelectorAll('.seed');
    //console.log(seededFruit);
    //const seededFruit1 = document.getElementsByClassName('seed');
    //console.log(seededFruit1);
    // 2. Get all seedless fruit elements
    // Your code here
    //const seedlessFruit = document.querySelectorAll('.seedless');
    //console.log(seedlessFruit);
    //const seedlessFruit1 = document.getElementsByClassName('seedless');
    //console.log(seedlessFruit1);
    // 3. Get first seedless fruit element
    // Your code here
    //console.log(seedlessFruit[0]);
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    //const innerSpan = document.getElementById("wrapper");
    //const innerP = innerSpan.firstElementChild;
    //console.log(innerP.childNodes[1]);
    
    // 5. Get all children of element "wrapper"
    // Your code here
    //console.log(innerSpan.children);
    // 6. Get all odd number list items in the list
    // Your code here
    const orderedList = document.querySelector('ol');
    const liItems = orderedList.children;
    //console.log(liItems);
    const liOddItems = orderedList.getElementsByClassName("odd");
    //console.log(liOddItems);
    // 7. Get all even number list items in the list
    // Your code here
    //const orderedList = document.querySelector('ol');
    let liEvenItems = function(items) {
        let newArr = [];
        for (let i = 0; i < items.length; i++) {
            if (i % 2 !== 0) {
                newArr.push(items[i]);
            }
        }
        return newArr;
    };
    
    //console.log(liEvenItems(liItems));
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const sectionThree = document.getElementById('three');
    console.log(sectionThree);
    const sectionThreeSecondChild = sectionThree.children[1];
    const firstChild = sectionThreeSecondChild.children[0];
    console.log(firstChild);
    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.getElementsByClassName('shopping');
    console.log(amazon);
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const liElements = sectionThree.querySelector('ul').children;
    console.log(liElements);
}

window.onload = select;