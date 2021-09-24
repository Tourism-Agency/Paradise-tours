const Hotel = require("../models/hotels.model");

// Create and Save a new Hotel
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Hotel
  const message = new Hotel({
    title: req.body.title,
    message : req.body.message,
    response : req.body.response,
    user_id : req.body.user_id,
    user_role: req.body.user_role,
  });

  // Save Hotel in the database
  Hotel.create(message, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hotel."
      });
    else res.send({hotel:data});
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Hotel.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({hotels:data});
  });
};

exports.findBooking = (req, res) => {
  Hotel.findByGuideId(req.params.guideId,req.query.status, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Hotel with id ${req.params.guideId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Hotel with id " + req.params.guideId
        });
      }
    } else res.send({hotels:data});
  });
};

exports.findOne = (req, res) => {
  Hotel.findById(req.params.bookingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Hotel with id ${req.params.bookingId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Hotel with id " + req.params.bookingId
        });
      }
    } else res.send({hotel:data});
  });
};

// Update a Hotel identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Hotel.updateById(
    req.params.messageId,
    new Hotel(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Hotel with id ${req.params.messageId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Hotel with id " + req.params.messageId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Hotel with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};