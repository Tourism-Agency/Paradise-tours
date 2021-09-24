const Booking = require("../models/bookings.model");

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Booking
  const booking = new Booking({
    date : req.body.date,
    customerID : req.body.customerID,
    packageID : req.body.packageID,
    booked_date : req.body.booked_date,
    no_of_days : req.body.no_of_days,
    no_of_visitors : req.body.no_of_visitors,
    no_of_rooms : req.body.no_of_rooms,
    transport_type : req.body.transport_type,
    price : req.body.price,
    paymentID : req.body.paymentID,
    guide_status : 'pending',
    transport_status : 'pending',
    booking_status : 'pending',
    guide_id:req.body.guide_id,
    transport_id:req.body.transport_id
  });

  // Save Booking in the database
  Booking.create(booking, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking."
      });
    else res.send({booking:data});
  });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Booking.getAll(req.query.status,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send({bookings:data});
  });
};

exports.findBooking = (req, res) => {
  Booking.findByGuideId(req.params.guideId,req.query.status,req.query.history,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Booking with id ${req.params.guideId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Booking with id " + req.params.guideId
        });
      }
    } else res.send({bookings:data});
  });
};

exports.findOne = (req, res) => {
  Booking.findById(req.params.bookingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Booking with id ${req.params.bookingId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Booking with id " + req.params.bookingId
        });
      }
    } else res.send({booking:data});
  });
};

// Update a Booking identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Booking.updateById(
    req.params.bookingId,
    new Booking(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Booking with id ${req.params.bookingId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Booking with id " + req.params.bookingId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Booking with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {

};