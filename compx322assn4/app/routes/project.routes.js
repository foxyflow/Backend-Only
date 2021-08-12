//Endpoints:
//(See Postman comments for more information.)
module.exports = app =>
{
  const projects = require("../controllers/project.controller");

app.post('/new', projects.create); //new = created a new project

app.get('/ap', projects.allProjects); //ap = all projects

  //get one project by end-user choosing Id number after port:/ EG localhost:4000/3 gets Project 3.
 app.get('/:id', projects.findById);

 app.get('/pn/:projectname', projects.findByName); //Get project by name.

    app.put('/:id', projects.update); //update by Id

app.delete('/:id', projects.delete); //Delete by Id.

app.delete('/da', projects.deleteAll); //Drop all projects from table.

}