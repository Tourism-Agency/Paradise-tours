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
    else res.send(data);
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
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};