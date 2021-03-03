var Parse = require("parse/node");

Parse.initialize(
  "CaK5qBIGP7TsDMkOQbnnyuH3c6ehk1NgbVeaCNMl",
  "3YUGozjt5XsRuyYQOuGuilAiD5ybCTbYDUuic0To"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";
const MyFirstClass = Parse.Object.extend("MyFirstClass");
const myFirstClass = new MyFirstClass();

myFirstClass.set("name", "I'm able to save objects!");
myFirstClass.save().then(
  (object) => {
    // Success
    alert("New object created with objectId: " + object.id);
  },
  (error) => {
    // Save fails
    alert("Failed to create new object, with error code: " + error.message);
  }
);
