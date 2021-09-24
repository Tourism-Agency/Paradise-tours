const Package = require("../models/packages.model");

// Create and Save a new Packages
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Packages
  const package = new Package({
    no_of_places_visit : req.body.no_of_places_visit,
    time_limit : req.body.time_limit,
    prize_with_van : req.body.prize_with_van,
    prize_with_bus : req.body.prize_with_bus,
    prize_with_car : req.body.prize_with_car,
  });

  // Save Packages in the database
  Package.create(package, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Packages."
      });
    else res.send({package:data});
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Package.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({packages:data});
  });
};

exports.findOne = (req, res) => {
  Package.findById(req.params.packageId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Packages with id ${req.params.packageId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Packages with id " + req.params.packageId
        });
      }
    } else res.send({package:data});
  });
};

exports.findHotels = (req, res) => {
  Package.findByHotels(req.params.packageId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Packages with id ${req.params.packageId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Packages with id " + req.params.packageId
        });
      }
    } else res.send({hotels:data});
  });
};

exports.findLocations = (req, res) => {
  Package.findByLocations(req.params.packageId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Packages with id ${req.params.packageId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Packages with id " + req.params.packageId
        });
      }
    } else res.send({locations:data});
  });
};

exports.findTransports = (req, res) => {
  Package.findByTransports(req.params.packageId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Packages with id ${req.params.packageId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Packages with id " + req.params.packageId
        });
      }
    } else res.send({transports:data});
  });
};


// Update a Packages identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Package.updateById(
    req.params.bookingId,
    new Packages(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Packages with id ${req.params.bookingId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Packages with id " + req.params.bookingId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Packages with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};