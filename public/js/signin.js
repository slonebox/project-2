$("#submit").on("click", function(event){
  event.preventDefault();

  // Capture login credentials:
  var currentUser = {
    email: $("#email-input")
      .val()
      .trim(),
    password: $("#password-input")
      .val()
      .trim()
  };

  // store to local storage to be read later on by other files
});
