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
  
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};