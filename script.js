// Get references to the input, button, and list container
let input = document.querySelector("#input-box");
let addBtn = document.querySelector("#addBtn");
let listContainer = document.querySelector("#list-container");

// Add event listener to the button
addBtn.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        // Create a new list item
        let li = document.createElement("li");

        // Create a text node with the input value
        let taskText = document.createTextNode(input.value);
        li.appendChild(taskText); // Append the text node to the list item

        // Create a remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        li.appendChild(removeBtn); // Append the button to the list item

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Clear the input field
        input.value = "";

        // Add a click event to the remove button to remove the list item when clicked
        removeBtn.addEventListener("click", function () {
            listContainer.removeChild(li);
        });
    }
});
