//Function that runs on click on submission
$("#submit").on("click", function(event) {
  //Prevent submission of default values or empty form
  event.preventDefault();

  // Get references to page elements
  var newPost = {
    title: $("#title-input")
      .val()
      .trim(),
    content: $("#content-input")
      .val()
      .trim(),
    userID: $("#user-select")
      .find(":selected")
      .data("id")
  };

  // Display the new variable in the console
  console.log(newPost);

  //Display the Modal
  $("#the-modal").show();

  //Send the data to the posts API route
  $.post("/api/posts", newPost, function(data) {
    if (data) {
      console.log("New user added.");
    } else {
      console.log("Hmmmm, something didn't work right.");
    }
  });
});

//On-click functions to exit modal
$(".close").on("click", function(event) {
  $("#the-modal").hide();
});

window.onclick = function(event) {
  if (event.target == "#the-modal") {
    $("#the-modal").hide();
  }
};
