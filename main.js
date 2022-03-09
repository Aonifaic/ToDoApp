//Define variables
let addToDoButton = document.getElementById("addToDo");
let listContainer = document.getElementById("listContainer");
let submission = document.getElementById("submission");

addToDoButton.addEventListener("click", function() {
    //create a paragraph element
    var item = document.createElement("p");
    
    //add styling to paragraph elements
    item.classList.add("paragraph-styling");

    //set the item to be the text in box
    item.innerText = submission.value;
    
    //create delete button element
    var deleteButton = document.createElement("button");

    //add styling to button elements
    deleteButton.classList.add("button-styling");

    //create text for button
    deleteButton.innerText = "X";

    //place the item into the container
    listContainer.appendChild(item);

    //place the deleteButton into the container
    listContainer.appendChild(deleteButton);

    //remove text in box after submission
    submission.value = "";

    //cross off the text
    item.addEventListener("click", function() {
        item.style.textDecoration = "line-through";
    })

    //add listener for deleteButton
    deleteButton.addEventListener("click", function() {
        listContainer.removeChild(item);
        listContainer.removeChild(deleteButton);
    })
})