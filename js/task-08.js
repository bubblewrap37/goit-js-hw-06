const form = document.querySelector("form.login-form");
const submitButton = document.querySelector(".login-form button");

form.addEventListener("submit", formValidate);

function formValidate(event) {
  event.preventDefault();
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert("some fields are empty");
  } else {
    createUser();
  }
}

function createUser() {
  const newUser = {
    [form.elements.email.name]: form.elements.email.value,
    [form.elements.password.name]: form.elements.password.value,
  };
  console.log(newUser);
  form.reset();
}
