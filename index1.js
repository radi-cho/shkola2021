var myButton = document.getElementById('btn');
// var myInput = document.getElementById('inp');
var allButtons = document.querySelectorAll('button:nth-child(even)');
var myInput = document.querySelector('#inp');

allButtons.forEach((x, i) => x.style.background = i);

function ggbg() {
	console.log(myInput.value);
}

myButton.addEventListener('click', ggbg);
myButton.disabled = true;

function findNextPrime(x) {
	while (true) {
		let prime = true;
		for (let i = 2; i <= Math.sqrt(x); i++) {
			if (x % i === 0) prime = false;
		}

		if (prime) return x;
		x++;
	}
}
