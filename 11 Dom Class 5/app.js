let userName = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");
let errorTag = document.getElementById("error");

// all inputs
let allInputs = document.querySelectorAll("input");

// event listen
submitBtn.addEventListener("click", function () {
  // Check blank fields
  if (
    userName.value == "" ||
    phone.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    showError("Fields can't be empty!");
    return;
  }

  // Name length check
  if (userName.value.length < 5) {
    showError("Name length should be more than 5 latters.");

    return;
  }

  // Phone length check
  if (phone.value.length != 11) {
    showError("Phone number must be in 11digits!");
    return;
  }

  // Password length check
  if (password.value.length < 8) {
    showError("Password length should more than 7 char!");
    return;
  }

  // end event listener
});

// Show error
function showError(errorText) {
  errorTag.innerHTML = errorText;
}

// Hide error
function hideError() {
  errorTag.innerHTML = "";
}

// Add keydown event to all inputs
allInputs.forEach(function (item) {
  // add event listener to current loop item
  item.addEventListener("keydown", function () {
    hideError();
  });
  // endforeach
});
