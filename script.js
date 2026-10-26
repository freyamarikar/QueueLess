
const buttons = document.querySelectorAll(".join-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-modal");
const doneButton = document.getElementById("done-modal");
const toast = document.getElementById("toast");
let nextToken = 1;
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

function closeModal() {
  modal.hidden = true;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    const number = String(nextToken++).padStart(3, "0");
    const position = nextToken - 1;
    const wait = position * 3;

    document.getElementById("modal-service").textContent = service;
    document.getElementById("token-number").textContent = `Q${number}`;
    document.getElementById("token-position").textContent = `Demo position: ${position}`;
    document.getElementById("token-wait").textContent = `Estimated wait: ${wait} minutes`;

    modal.hidden = false;
    doneButton.focus();
  });
});

closeButton.addEventListener("click", closeModal);
doneButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
