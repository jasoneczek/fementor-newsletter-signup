const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const card = document.getElementById("card");
const success = document.getElementById("success");
const dismissBtn = document.getElementById("dismissBtn");

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if ("email" in data) {
    const emailAddress = data.email.trim();

    const isValidEmail = validateEmail(emailAddress);

    if (isValidEmail) {
      email.classList.remove("input-error");
      card.style.display = "none";
      success.style.display = "flex";
    } else {
      email.classList.add("input-error");
      error.textContent = "Valid email required";
    }
  }
};

const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(email);
};

const dismissSuccess = () => {
  email.classList.remove("input-error");
  error.textContent = "";
  email.value = "";

  card.style.display = "grid";
  success.style.display = "none";
};

email.addEventListener("input", () => {
  if (email.classList.contains("input-error")) {
    email.classList.remove("input-error");
    error.textContent = "";
  }
});

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", dismissSuccess);
