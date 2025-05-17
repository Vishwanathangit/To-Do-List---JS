// Selecting all elements
var inputbox = document.getElementById("inputbox");
var btn = document.getElementById("btn");
var container = document.getElementById("container");

btn.addEventListener("click", function () {
    if (inputbox.value.trim() === "") return; // prevent empty inputs
    var li = document.createElement("li");
    li.innerHTML = inputbox.value + " <button onclick='deleteItem(event)'>Delete</button>";
    container.append(li);
    inputbox.value = ""; // clear input after adding
});

function deleteItem(event) {
    event.target.parentElement.remove();
}