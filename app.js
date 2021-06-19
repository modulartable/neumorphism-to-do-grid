//Select add to do button
const addButton = document.getElementById("add-todo");

//Select the overall container div

const container = document.getElementById("container");

//Seleect to do input field
const todoInput = document.getElementById("todo-input");

//Selecting the delete all button
const deleteAll = document.getElementById("deleteall");

//Selecting all todos

const allItems = document.getElementsByClassName("todo-list");

//Add event listener to add button
addButton.addEventListener("click", addTodo);

deleteAll.addEventListener("click", deleteList);

//Define i for data attributes
i = 1;

x = 1;

function addTodo(event) {
  if (todoInput.value == false) {
      //Alert to enter something!
    window.alert("Please enter a new item");

    //Don't show delete all button
    deleteAll.style.display = "none";
  } else {
//Show delete all button
    deleteAll.style.display = "inline";

    //Create a new div for each activity
    let newActivity = document.createElement("div");

    //Assign the todo-list class
    newActivity.className = "todo-list";

    newActivity.setAttribute("data-id", i++);

    //Set the new item's inner text to match the user's input and reset the input field to placeholder
    newActivity.innerText = todoInput.value;
    todoInput.value = "";

    //Create delete button
    let deleteButton = document.createElement("span");

    //Assign delete button class, positioning, overlay, attributes, etc.
    deleteButton.className = "deletebtns";

    deleteButton.style.position = "absolute";

    deleteButton.style.zIndex = "1";

    deleteButton.innerHTML = `<img data-delete-id= "${x++}" src="https://i.ibb.co/vdFSyxP/cancel.png">`;

    deleteButton.addEventListener("click", deleteToDo);

    newActivity.appendChild(deleteButton);

    container.appendChild(newActivity);
  }
}

function deleteList(event) {
  [...allItems].map((htmlList) => htmlList.remove());
  deleteAll.style.display = "none";
}

function deleteToDo(e) {
  //Get value of delete button
  let deleteValue = e.target.getAttribute("data-delete-id");

  //Get value of parent div/note
  let itemValue = document.querySelector(`[data-id="${deleteValue}"]`);

  //Remove item

  itemValue.parentElement.removeChild(itemValue);

  if([...allItems].length == 0) {
    deleteAll.style.display = "none";
  }
}
