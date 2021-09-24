var express = require('express');
var router = express.Router();
const bookings = require("../controllers/bookings.controller");

  // Create a new Booking
  router.post("/", bookings.create);

  // Retrieve all bookings
  router.get("/", bookings.findAll);

  // Retrieve all bookings bu guideId
  router.get("/guide/:guideId", bookings.findBooking);

  // Retrieve a single Booking with BookingId
  router.get("/:bookingId", bookings.findOne);

  // Update a Customer with bookingId
  router.put("/:bookingId", bookings.update);

  // Delete a Customer with bookingId
  router.delete("/:bookingId", bookings.delete);

  // Create a new Customer
  router.delete("/", bookings.deleteAll);

module.exports = router;
