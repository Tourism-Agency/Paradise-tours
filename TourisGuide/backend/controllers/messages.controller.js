const Message = require("../models/messages.model");

// Create and Save a new Message
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Message
  const message = new Message({
    title: req.body.title,
    message : req.body.message,
    response : req.body.response,
    user_id : req.body.user_id,
    user_role: req.body.user_role,
  });

  // Save Message in the database
  Message.create(message, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message."
      });
    else res.send({message:data});
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Message.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({messages:data});
  });
};

exports.findMessages = (req, res) => {
  Message.findByGuideId(req.query.guideId, (err, data) => {
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

exports.findOne = (req, res) => {
  Message.findById(req.params.bookingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Message with id ${req.params.bookingId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Message with id " + req.params.bookingId
        });
      }
    } else res.send({message:data});
  });
};

// Update a Message identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Message.updateById(
    req.params.messageId,
    new Message(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Message with id ${req.params.messageId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Message with id " + req.params.messageId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Message with the specified customerId in the request
exports.delete = (req, res) => {
  Message.remove(req.params.messageId, (err, data) => {
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