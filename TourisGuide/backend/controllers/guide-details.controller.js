const GuildDetail = require("../models/guide-details.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const guideDetail = new GuildDetail({
    skills: req.body.skills,
  });

  // Save Customer in the database
  GuildDetail.create(guideDetail, (err, data) => {
    if (err)
    {console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });}
    else res.send(data);
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  GuildDetail.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({skills:data});
  });
};

exports.findDetails = (req, res) => {
  GuildDetail.findByGuideId(req.query.guideId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Message with id ${req.query.guideId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Message with id " + req.params.guideId
        });
      }
    } else res.send({messages:data});
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  GuildDetail.remove(req.params.skillId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.skillId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.skillId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};