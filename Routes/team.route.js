module.exports = app => {
  const team = require("../controller/team.controller.js");

  var router = require("express").Router();

  // Create a new Team
  router.post("/add", team.create);

  // Retrieve all Team
  router.get("/findAll", team.findAll);

  app.use('/team', router);
}