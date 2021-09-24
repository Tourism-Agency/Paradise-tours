const Guide = require("../models/guides.model");

// Create and Save a new Guide
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Guide
  const guide = new Guide({
    service_charge : req.body.service_charge,
    availability: req.body.availability,
    user_id : req.body.user_id
  });

  // Save Guide in the database
  Guide.create(guide, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Guide."
      });
    else res.send(data);
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Guide.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({dates:data});
  });
};

exports.findDates = (req, res) => {
  Guide.findByGuideId(req.query.guideId, (err, data) => {
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

// Find a single Guide with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Guide identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Guide with the specified customerId in the request
exports.delete = (req, res) => {
  Guide.remove(req.params.guideId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.messageId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.messageId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};