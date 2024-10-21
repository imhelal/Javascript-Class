let userName = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");
let errorTag = document.getElementById("error");

// event listen
submitBtn.addEventListener("click", function () {
  // Check blank fields
  if (
    userName.value == "" ||
    phone.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    // alert("Fields can't be empty!");
    //errorTag.innerHTML = "Fields can't be empty!";
    showError("Fields can't be empty!");
    return;
  }

  // Name length check
  if (userName.value.length < 5) {
    //alert("Name length should be more than 5 latters.");
    //errorTag.innerHTML = "Name length should be more than 5 latters.";
    showError("Name length should be more than 5 latters.");

    return;
  }

  // Phone length check
  if (phone.value.length != 11) {
    //alert("Phone number must be in 11digits!");
    //errorTag.innerHTML = "Phone number must be in 11digits!";
    showError("Phone number must be in 11digits!");
    return;
  }

  // Password length check
  if (password.value.length < 8) {
    //alert("Password length should more than 7 char!");
    //errorTag.innerHTML = "Password length should more than 7 char!";
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
