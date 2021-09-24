const User = require("../models/users.model");

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Booking
  const user = new User({
    user_name : req.body.user_name,
    user_password : req.body.user_password,
    first_name: req.body.first_name,
    last_name : req.body.last_name,
    email_address : req.body.email_address,
    phone_no : req.body.phone_no,
    user_status : req.body.user_status,
    registered_date : req.body.registered_date,
    last_visit_date : req.body.last_visit_date,
    age : req.body.age,
    nic : req.body.nic,
    birthday : req.body.birthday,
    hotel_name : req.body.hotel_name,
    hotel_contact_no : req.body.hotel_contact_no,
    city : req.body.city,
    role_id : req.body.role_id,
  });

  // Save Booking in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  User.getAll(req.query.role,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({users:data});
  });
};

// Find a single Booking with a customerId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.userId
        });
      }
    } else res.send({user:data});
  });
};

// Update a Booking identified by the customerId in the request
exports.update = (req, res) => {
  console.log(req.body);
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.updateById(
    req.params.userId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Booking with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Booking with id " + req.params.userId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Booking with the specified customerId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.userId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};