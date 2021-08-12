//Luke's Postman testing:
//POST
//localhost:4000/new
//prompts the user developer to enter object body messages:
//EG {
//     "message": "ER_BAD_NULL_ERROR: Column 'project-name' cannot be null"
//status code: 500 time 6ms
// }

//GET localhost:4000/
//JSON Pretty output:
// {
//    "message": "Welcome to Luke's assignment."
// } //status code: 200 time 9ms

//GET
//localhost:4000/ap
//Result 200 Gets all projects
//200 status and 20 ms

//GET via id
//localhost:4000/3
// [
//     {
//         "id": 3,
//         "projectname": "Play Luke's Github",
//         "projectdesc": "Looking for work: https://foxyflow.github.io/Portfolio",
//         "startdate": "Now",
//         "enddate": "Until further notice"
//     }
// ]

//GET localhost via projectname:
//http://localhost:4000/pn/byname
//result 200
// [
//     {
//         "id": 13,
//         "projectname": "byname",
//         "projectdesc": "testing getting project by name",
//         "startdate": "Now",
//         "enddate": "Until further notice"
//     }
// ]

//Update via id EG:
//PUT localhost:4000/3
// {
//     "projectname": "LukesLanguageLearning",
//     "projectdesc": "testing getting project by name",
//     "startdate": "Now",
//     "enddate": "Until further notice"
// }
//result: 200
// {
//     "error": false,
//     "message": "Project successfully updated"
// }

//delete
//localhost:4000/12
//Output: 200
// {
//     "error": false,
//     "message": "Project dropped from database"
// }

//deleteAll -- Output
//localhost:4000/da
//Output
// {
//     "error": false,
//     "message": "Project dropped from database"
// }