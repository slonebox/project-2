INSERT INTO bootiqueDB.Users (email, password, firstName, lastName, website, github, linkedin, imageURL, createdAt, updatedAt)
VALUES ("john@aol.com", "password", "John", "Johnson", "www.johnjohnson.com", "github.com/john", "linkedin.com/john", "john.jpeg", "2016-08-09 07:42:28", "2016-08-09 07:42:28");

INSERT INTO bootiqueDB.Posts (title, content, createdAt, updatedAt, UserId)
VALUES("First Post", "This is the first post and it is pretty okay.", "2016-08-09 07:42:28", "2016-08-09 07:42:28", "1");

INSERT INTO bootiqueDB.Comments (content, createdAt, updatedAt, PostId, UserId)
VALUES ("Are you kidding? This first post is AMAZING!", "2016-08-09 07:42:28", "2016-08-09 07:42:28", "1", "1");