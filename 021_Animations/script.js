var selector = document.querySelector("select");
selector.addEventListener("change", (event) => {
  var box = document.querySelector(".box");
  box.classList.remove("grower");
  box.style.animationTimingFunction = event.target.value;
  requestAnimationFrame(() => {
    box.classList.add("grower");
  });
});

var checkbox = document.querySelector(".toggle_element");
checkbox.addEventListener("change", (event) => {
  var box = document.querySelector(".box-step");
  box.classList.remove("steps");
  box.style.animationTimingFunction = event.target.checked
    ? "steps(10, end)"
    : "linear";
  requestAnimationFrame(() => {
    box.classList.add("steps");
  });
});

let animationCheckbox = document.querySelector("#animation-checkbox");
animationCheckbox.addEventListener("change", (event) => {
  let container = document.querySelector(".container");
  if (event.target.checked) {
    container.classList.add("reduce-motion");
  } else {
    container.classList.remove("reduce-motion");
  }
});
