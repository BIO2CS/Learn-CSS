let transitionBox = document.querySelector("#has-transition");

transitionBox.addEventListener("change", (event) => {
	let squareBox = document.querySelector(".square");
	if (!event.target.checked) {
		squareBox.classList.remove("has-transition");
	} else {
		squareBox.classList.add("has-transition");
	}
});
