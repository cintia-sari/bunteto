document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector(".name");
  const destinationInput = document.querySelector(".data-input");
  const sizeInputs = document.querySelectorAll(".size-input");
  const readyButton = document.querySelector(".forbidden");
  const closeButton = document.querySelector(".close");

  const windowDiv = document.querySelector(".window");

  function checkFields() {
    const nameValue = nameInput.value.trim();
    const destinationValue = destinationInput.value.trim();
    const selectedSize = Array.from(sizeInputs).find((input) => input.checked);

    if (nameValue !== "" && destinationValue !== "" && selectedSize) {
      readyButton.classList.add("basic");
      readyButton.classList.remove("forbidden");
    } else {
      readyButton.classList.remove("basic");
      readyButton.classList.add("forbidden");
    }
  }

  nameInput.addEventListener("input", checkFields);
  destinationInput.addEventListener("input", checkFields);
  sizeInputs.forEach((input) => input.addEventListener("change", checkFields));

  closeButton.addEventListener("click", function () {
    windowDiv.style.display = "none";
  });
});
