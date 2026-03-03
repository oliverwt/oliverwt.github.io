// establish myDiv
let myDiv = document.getElementById("myDiv");

// header
let a4 = document.createElement("h1");
a4.textContent = "Welcome to DOM homework";
myDiv.appendChild(a4);

// paragraph
let b4 = document.createElement("p");
b4.textContent = "This is your first DOM homework assignment";
myDiv.appendChild(b4);

// create list
let ul = document.createElement("ul");

// default list items
let li1 = document.createElement("li");
li1.textContent = "Sunday";

let li2 = document.createElement("li");
li2.textContent = "Monday";

let li3 = document.createElement("li");
li3.textContent = "Tuesday";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// append list
myDiv.appendChild(ul);

// highlight header
a4.classList.add("highlight");
a4.style.backgroundColor = "yellow";

// 4f Create Button Element below myDiv
let button = document.createElement("button");
button.textContent = "Add new list item";
myDiv.insertAdjacentElement("afterend", button);

// 4d item count
let items = 3;

// 4g Button event listener
button.addEventListener("click", function () {

    items++;

    let li = document.createElement("li");

    // 4h text with number
    li.textContent = "New List Item " + items;

    // 4i random color background
    function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
    }

    li.style.backgroundColor = getRandomColor();

    ul.appendChild(li);
});



