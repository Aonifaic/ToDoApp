//Define variables
let addToDoButton = document.getElementById("addToDo");
let listContainer = document.getElementById("listContainer");
let submission = document.getElementById("submission");

addToDoButton.addEventListener("click", function() {
    //create a div element
    var toDoContainer = document.createElement("div");

    //add styling to div
    toDoContainer.classList.add("toDo-styling");
    
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
    toDoContainer.appendChild(item);

    //place the deleteButton into the container
    toDoContainer.appendChild(deleteButton);

    //place the toDoContainer into the list container
    listContainer.appendChild(toDoContainer);

    //remove text in box after submission
    submission.value = "";

    //cross off the text
    item.addEventListener("click", function() {
        item.style.textDecoration = "line-through";
    })

    //add listener for deleteButton
    deleteButton.addEventListener("click", function() {
        toDoContainer.removeChild(item);
        toDoContainer.removeChild(deleteButton);
        listContainer.removeChild(toDoContainer);
    })
})