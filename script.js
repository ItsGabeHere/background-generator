var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandomColor = document.querySelector(".btn-randomColor");

function setGradient() {
	body.style.background = btnRandomColor.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

// Returns a color as a string in the hex code where the rgb is #rrbbgg, i.e. #0000FF for blue.
function getRandomColor() {
	const hexDigits = '0123456789ABCDEF';
	const numberOfHexDigitsNeeded = 6;
	let color = "#";
	for (let i = 0; i < numberOfHexDigitsNeeded; ++i) {
		// Math.random returns a random number between 0 (inclusive) and 1 (exclusive)
		// so taking the floor of the random number and multiplying the the length will
		// get an integer range between 0 and length - 1.
		color += hexDigits[Math.floor(Math.random() * hexDigits.length)];
	}
	return color;
}

function setRandomGradientColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btnRandomColor.onclick = setRandomGradientColor;