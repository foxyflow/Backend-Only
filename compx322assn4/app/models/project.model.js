//CRUD functions using db.query(method)  [DATA LOGIC]

//Requires:
require("./db");
const db = require("./db");

//The constructor for Getting data //note
const Project = function(project){
  this.projectname = project.projectname;
  this.projectdesc = project.projectdesc;
  this.startdate = project.startdate;
  this.enddate = project.enddate;
}

//create() or POST()
Project.create = (newProject, result) =>{
  db.query("INSERT INTO projects_assign4 SET ?", newProject, (err, res) => {
    if(err){
      console.log("error in Controller, Project.create: ", err);
      result(err, null);
      return;
    }
    console.log("New Project created: ", {id: res.insertId, ...newProject});
    result(null, {id: res.insertId, ...newProject});
  });
};

//GET all projects:
Project.getAll = result => {
  db.query("select * from projects_assign4", (err, res) => {
    if(err){
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("all project details:", res);
    result(null, res);
  });
};

//Find a Project by ID:
Project.findById = function(id, result)
{
  db.query("SELECT * FROM projects_assign4 WHERE id = ? ", id, function (err, res){
    if(err)
    {
      console.log("error: missing id in database ", err);
      result(err, null);
    }
    else
      result(null, res);
  });
};

//GET project by name:
Project.findByName = (projectName, result) => {
    db.query(`select * from projects_assign4 where projectname= '${projectName}'`, (err, res) =>{
   if(err)
   {
      console.log("error:", err);
      result(null, err);
    }
   else {
       console.log("all project details by project name search:", res);
       result(null, res);
   }
    });
};

//Update by ID
Project.update = function(id, project, result){
   db.query("UPDATE projects_assign4 SET projectname=?,projectdesc =?, startdate=?, enddate=? WHERE id = ?", [project.projectname, project.projectdesc, project.startdate, project.enddate, id], function (err, res){
    if(err){
      console.log("500 error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

//Delete a project by id:
Project.delete = function(id, result) {
  db.query("DELETE FROM projects_assign4 WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: deleting via id ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//deletes projects from table: projects_assign4 without deleting the table:
Project.deleteMany = function(err, result) {
  db.query("DELETE * FROM projects_assign4 OR DROP TABLE projects_assign4", function (err, res) {
    if (err) {
      console.log("error: Projects are still in projects_assign4 table", err);
      result(null, err);
    } else {
      result(null, res); console.log("All data has been erased.");
    }
  });
};

module.exports = db;
//module.exports = allProjects()
module.exports = Project;





