$(function() {
  $("#submit").on("click", function(event) {
    // prevent default, reloading of page
    event.preventDefault();
    console.log("i was clicked");

    // get references from the new comment to send to database
    var newComment = {
      content: $("#comment-input")
        .val()
        .trim(),
      postId: $("#submit").data("id"),
      userId: $("#user")
        .find(":selected")
        .data("id")
    };
    console.log(newComment.userId);

    $.ajax("/api/comments", {
      type: "POST",
      data: newComment
    }).then(function() {
      if (data) {
        console.log("new comment added.");
      } else {
        console.log("something may be wrong...");
      }
      location.reload();
    });

    $("#comment-input").val("");
  });
});
