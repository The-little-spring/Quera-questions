const container = document.getElementById("container");
container.style.alignItems = "center";
const input = document.getElementById("number");

function drawSquareFractal(n) {
  container.innerHTML = ""; // clear the container before drawing new fractal
  const rowNumber = n * 2;
  for (i = 1; i < rowNumber + 1; i++) {
    const rowElement = document.createElement("div");
    container.appendChild(rowElement);
    for (j = 1; j < i + 1; j++) {
      const divElement = document.createElement("div");
      divElement.style.margin = "0 2px 1px -1px";
      if (j % 2 === 0 && i % 2 != 0) {
        divElement.classList.add("block");
      } else {
        divElement.classList.add("block", "active");
      }
      rowElement.appendChild(divElement);
    }
  }
}

input.addEventListener("input", function () {
  const n = parseInt(this.value);
  drawSquareFractal(n);
});
