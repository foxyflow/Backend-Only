const Project = require("../models/project.model");

//Write or create/POST() business logic:
//Request authentication:
    exports.create = (req, res) => {
        if(!req.body){
            res.status(400).send({
                message: "Content should not be empty."
            });
        }
    //Creating/mapping new Project:
    //To create new project:
        let project = new Project({
            id: req.body.id,
            projectname: req.body.projectname,
            projectdesc: req.body.projectdesc,
            startdate: req.body.startdate,
            enddate: req.body.enddate
        });
        //Sending the new project to the database:
        Project.create(project, (err, data) =>{
        if(err)
            res.status(500).send({
                message:
                err.message || "An error is most likely in the create logic of the controller."
            });
        else res.send(data);
    });
};

//Read or GET business logic
exports.allProjects = (req, res) => {
    Project.getAll((err, data) => {
      if (err)
        res.status(404).send({
          message:
            err.message || "An error occurred while retrieving projects."
        });
      else res.send(data);
    });
  };

//Find Project by Id:
exports.findById = function(req, res)
{
    Project.findById(req.params.id, function (err, project)
    {
        if (err) res.status(400).send({
            message:
            err.message || "Bad request: try a different id number."
        });
        else res.json(project); //add status code
    });
};

exports.findByName = (req,res) => {

    Project.findByName(req.params.projectname, (err, data) =>
    {
        if (err){
            res.status(500).send({
                message: err.message || 'An error occurred while retrieving the projects.'
            });
        } else {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.send(`A project does not exist with the name: ${req.params.projectname}`)
            }
        }
    });
};

    //Update for controller:
exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
    res.status(400).send({ error:true, message: 'Please provide all the required fields'});
    }else{
        Project.update(req.params.id, new Project(req.body),
            function(err, project){
            if(err)
                res.send(err);
            res.json({ error:false, message: 'Project successfully updated'});
            });
    }
};

//Delete by id for Controller:
exports.delete = function(req, res){
    Project.delete(req.params.id, function (err, project){
        if(err)
            res.send(err);
        res.json({error:false, message: 'Project dropped from database'});
    });
};

//DeleteAll for Controller:
exports.deleteAll = (req, res) => {
    Project.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.delete} Projects deleted from database`
            });
        })
        .catch(err => {
            res.stat(500).send({
                message:
                    err.message || "An error occurred while removing all projects."
            });
        });
};




