const myBtn = document.querySelector("#add-btn");
const mainInput = document.querySelector("#main-input");
let contents = document.querySelector("#contents");

let tasks = [];

function check(index) {
	tasks[index].checked = !tasks[index].checked;
	renderArray();
}

function renderArray() {
	contents.remove();
	contents = document.createElement("ul");
	contents.setAttribute("id", "contents");

	tasks.sort(x => x.checked ? 1 : -1);

	for (let i = 0; i < tasks.length; i++) {
		const li = document.createElement("li");
		const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("id", "checkbox" + i);
		checkbox.checked = tasks[i].checked;
		checkbox.addEventListener("click", () => check(i));

		const label = document.createElement("label");
		label.setAttribute("for", "checkbox" + i);
		label.appendChild(document.createTextNode(tasks[i].name));

		li.appendChild(checkbox);
		li.appendChild(label);

		contents.appendChild(li);
	}

	document.body.appendChild(contents);
}

myBtn.addEventListener("click", function () {
	tasks.push({name: mainInput.value, checked: false});
	renderArray();

	mainInput.value = "";
});