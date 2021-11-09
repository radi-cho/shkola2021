const myBtn = document.querySelector("#add-btn");
const mainInput = document.querySelector("#main-input");
const contents = document.querySelector("#contents");

let tasks = [];

function check(index) {
	tasks[index].checked = !tasks[index].checked;
	renderArray();
}

function renderArray() {
	tasks.sort(x => x.checked ? 1 : -1);

	let listItems = "";
	for (let i = 0; i < tasks.length; i++) {
		listItems += '<li><input type="checkbox" '
			+ (tasks[i].checked ? 'checked' : '')
			+ ' onClick="check('
			+ i
			+ ')" id="checkbox'
			+ i
			+ '" /><label for="checkbox' 
			+ i
			+ '">'
			+ tasks[i].name
			+ '</label></li>';
	}

	contents.innerHTML = listItems;
}

myBtn.addEventListener("click", function () {
	tasks.push({name: mainInput.value, checked: false});
	renderArray();

	mainInput.value = "";
});