Please use Firefox 
as JSON parsing seems more automatic and consistent as of 2021.

My projects.sql is called: projects_assign4.sql
as I have the name projects.sql stored for assign3.
A copy of the projects_assign4 is stored in this assignment if you would like to use it in your mySQL database, otherwise please name your table projects_assign4

Extra instructions in server.js

This project demonstrates backend CRUD

Luke Fox 1177897 2021

Enjoy


//Information if not connected to a mySQL management system:

//Connection details in db.config.js:

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "ldf4"
};

//Table name: projects_assign4

//Dependents that may need installing via: npm i node --save
{
  "name": "restapi",
  "version": "1.0.0",
  "description": "REST API Example",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mysql": "^2.18.1",
    "mysql2": "^2.2.5",
    "node": "^16.1.0",
    "nodemon": "^2.0.7",
    "sequelize": "^6.6.2",
    "sql": "^0.78.0"
  }
}