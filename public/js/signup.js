// Get the modal
var modal = $("myModal");

// Get the <span> element that closes the modal
var span = $("close")[0];

//Function that runs on click on submission
$("#submit").on("click", function(event) {
  //Prevent submission of default values or empty form
  event.preventDefault();

  // Get references to page elements
  var newUser = {
    email: $("#email-input")
      .val()
      .trim(),
    password: $("#password-input")
      .val()
      .trim(),
    firstName: $("#firstName-input")
      .val()
      .trim(),
    lastName: $("#lastName-input")
      .val()
      .trim(),
    website: $("#website-input")
      .val()
      .trim(),
    github: $("#github-input")
      .val()
      .trim(),
    linkedin: $("#linkedin-input")
      .val()
      .trim(),
    imageURL: $("#imageURL-input")
      .val()
      .trim()
  };

  //Display the Modal
  $("#the-modal").show();

  //Send the data to the Users API route
  $.post("/api/users", newUser, function(data) {
    if (data) {
      console.log("New user added.");
    } else {
      console.log("Hmmmm, something didn't work right.");
    }
  });
});

//On-click functions to exit modal
$(".close").on("click", function (event){
  $("#the-modal").hide();
});

window.onclick = function(event){
  if (event.target == "#the-modal"){
      $("#the-modal").hide();
  };
};
