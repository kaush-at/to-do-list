var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//finding the length of the text you enter in to input field
function inputLength() {
	return input.value.length;
}

// creating TODO items with delete buttons
function createListElement() {
	var div = document.createElement("div")
	console.log(div);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    div.appendChild(li);
	input.value = "";

	// Create delete button and append it to the li element
	var del = document.createElement("button");
	del.className="del-btn";
	del.appendChild(document.createTextNode("Delete!"));  //  if you need you can add text to the button using  -  del.innerHTML="delete";
	div.appendChild(del);
	ul.appendChild(div);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleFunction(e){
	e = e || window.event;
	var target = e.target || e.srcElement;
	if (target.tagName !== "BUTTON") {  // This is to make sure to add styles to only li text (not to add styles to delete button)
		target.classList.toggle("done");
	}
	if (target.tagName === "BUTTON"){
		console.log(target.parentNode.parentNode);
		target.parentNode.parentNode.removeChild(target.parentNode);  // target.parentNode = <li></li>
	}
}

function deleteItems(event){
	event = event || window.event;
	var target = event.target || event.srcElement;
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleFunction);
