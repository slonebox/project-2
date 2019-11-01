// =====================================================================
// API OBJECT
// =====================================================================
// Holds all methods for requests to API 
var API = {
    saveNewUser: function (user) {

    },
    getUsers: function() {
        return $.ajax({
            url: "api/users",
            type: "GET"
        });
    },
    saveNewPost: function(post){
        
    },
    // maybe receives an argument of a user? 
    getPosts: function() {

    }
}





// =====================================================================
// CREATE NEW USER
// =====================================================================

// References from create new user form 
var $firstName = $("#first-name").val().trim();
var $lastName = $("#last-name").val().trim();
var $linkedIn = $("#linkedIn").val().trim();
var $gitHub = $("#gitHub").val().trim();
var $website = $("#website").val().trim();


// Handle new user submit. Save the new user information to the database, then show an updated list of users 
var handleNewUserSubmit = function (event) {
    event.preventDefault();

    // creating a new user variable based on the input given by the new user
    var newUser = {
        firstName: $firstName,
        lastName: $lastName,
        linkedIn: $linkedIn,
        gitHub: $gitHub,
        website: $website
    };

    // checking to see if any fields are missing from the form. If there are any fields missing, alert the user and end the function 
    // Can change the alert to a message on the page once the front end is worked on 
    if (!(newUser.firstName && newUser.lastName && newUser.linkedIn && newUser.gitHub && newUser.website)){
        // display a modal instead of an alert? 
        alert("Please complete all fields!");
        return; 
    }

    // post to the users API, display a modal telling the user that the new user was added and then refresh the page to show all users 
    API.saveNewUser(newUser).then(function() {
        refreshUsers();
    });

    // clear the form
    // should add: write a message to the user saying that the form has been submitted
    $firstName.val("");
    $lastName.val("");
    $linkedIn.val("");
    $gitHub.val("");
    $website.val("");
};





// =====================================================================
// SUBMIT COMMENT 
// =====================================================================

// References from posting a comment 

var commentAuthor = $("#comment-author").val().trim();
var commentBody = $("#comment-body").val().trim();





// Attaching handler functions to different form buttons 
// Create new user form 
$("#create-user").on("click", handleNewUserSubmit);
$("#post-comment").on("click", handlePostCommentSubmit);