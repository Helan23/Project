const db = require("../models");
console.log(db);
const Team = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
var Id = req.body.Id;
var name = req.body.TeamName;
var location = req.body.Location;
  var phoneno = req.body.PhoneNumber;
  var bankname = req.body.BankName;
   var branchname = req.body.BranchName;
   var ifsc = req.body.IFSCcode;
    var accountno = req.body.AccountNumber;
// Validate request
  if (!(req.body.Id && req.body.TeamName)) {
    res.status(400).send({
      message: "All values must be present"
    });
    return;
  }
const team_row ={
teamId : Id,
TeamName :name,
Location :location,
  PhoneNumber :phoneno,
  BankName :bankname,
  BranchName :branchname,
  IFSCcode : ifsc,
  AccountNumber : accountno
}
Team.create(team_row).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the team."
      });
    });
};




// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  return Team.findAll().then(data =>{res.send(data)}).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving team."
      });
    });
};




// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};