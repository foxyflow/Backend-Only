// Welcome to Luke's backend CRUD code project (Postman is required for UI testing).

//Step 1: Please: npm install nodemon -- this is why I have an index.js
//-- Nodemon looks for the index.js via htdocs and keeps the server running.
//This application uses: PORT 4000 with nodemon.
// Step2: You may be prompted to install node modules and other dependents.
// Step 3: Enjoy.

require("./app/routes/project.routes")  //1of2
const express = require('express');
const app = express();

//CORS for connecting to frontend:
//let cors = require('cors') //Not using CORS.
//app.use(cors)

//parse requests of content-type - application/json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Homepage route: localhost:4000
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Luke's projects." });
});

require("./app/routes/project.routes")(app); //2of2

// Setting port to listen for requests:
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));


