// defining our variables
let itemsList = document.getElementById("itemList")
const textInputVar = document.getElementById("input")

// function to call addItem() on Enter key
document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addItem(textInputVar.value);
    }
});

// function to add item to the list
function addItem(inputVal) {
    if (typeof inputVal !== undefined) {
        if (inputVal === "") {
            alert("You must write something!");
        } else {
            console.log("Logged value: ", inputVal);    // recording the input in console for testing
            textInputVar.value = "";                    
            
            // adding item to the list
            let li = document.createElement("li");      // creating new list element
            let t = document.createTextNode(inputVal);  // assigning t as a text node with value "inputVal"
            // appending t to the list item
            li.appendChild(t);
            // appending the list item with correct value to the master list
            document.getElementById("itemList").appendChild(li);
        }
    }
}