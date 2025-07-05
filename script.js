const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    alert(`Box ${index + 1} clicked!`);
  });
});
